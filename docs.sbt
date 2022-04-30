import play.core.PlayVersion
import scala.annotation.tailrec
import scala.io.Source
import scala.util.Using

lazy val docs = project
  .in(file("mdoc"))
  .settings(
    mdocIn := (ThisBuild / baseDirectory).value / "docs" / "README.md",
    mdocOut := (ThisBuild / baseDirectory).value / "README.md",
    mdocVariables := {
      Map(
        "PLAY_VERSION" -> PlayVersion.current
      ) ++ {
        Using(
          Source.fromFile(
            (ThisBuild / baseDirectory).value / "ui" / "yarn.lock"
          )
        ) { source =>
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
      }
    }
  )
  .enablePlugins(MdocPlugin)
