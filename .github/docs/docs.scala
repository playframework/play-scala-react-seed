//> using scala "2.12.19"
//> using lib "org.scalameta::mdoc:2.3.2"

import java.nio.file.Path
import scala.annotation.tailrec
import scala.io.Source
import scala.util.Using

object Docs extends App {
  val settings = mdoc
    .MainSettings()
    .withIn(Path.of("README.md"))
    .withOut(Path.of("../../README.md"))
    .withSiteVariables {
      val plugins = Using(Source.fromFile("../../project/plugins.sbt")) {
        source =>
          val lines = source.getLines()
          val version = lines
            .find(line =>
              line.contains("com.typesafe.play") && line.contains("sbt-plugin")
            )
            .map(_.split("%")(2).trim.replace("\"", "").replace(")", ""))
            .getOrElse(
              throw new IllegalArgumentException(
                "Failed to parse Play version."
              )
            )
          Map("PLAY_VERSION" -> version)
      }.get
      val yarn = Using(Source.fromFile("../../ui/yarn.lock")) { source =>
        val lines = source.getLines()
        @tailrec
        def loop(
            libraryVersions: Map[String, String]
        ): Map[String, String] = {
          if (lines.hasNext) {
            val line = lines.next()
            val libraryVersion =
              if (Set("react-scripts@", "react@").exists(line.startsWith)) {
                val library = line.split("@").head
                val version =
                  lines.next().split(" version ")(1).replace("\"", "")
                Some((library, version))
              } else None
            loop(
              libraryVersions ++ libraryVersion
                .map(Map(_))
                .getOrElse(Map.empty)
            )
          } else {
            libraryVersions
          }
        }
        val libraryVersions = loop(Map.empty[String, String])
        libraryVersions.map { case (k, v) =>
          (s"$k-version".toUpperCase.replace("-", "_"), v)
        }
      }.get
      plugins ++ yarn
    }
  val exitCode = mdoc.Main.process(settings)
  if (exitCode != 0) sys.exit(exitCode)
}
