import sbt.Package.FixedTimestamp

name := """play-scala-react-seed"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file("."))
  .enablePlugins(PlayScala)
  .settings(
    watchSources ++= (baseDirectory.value / "public/ui" ** "*").get,
    ThisBuild / packageOptions += FixedTimestamp(Package.keepTimestamps)
  )

resolvers += Resolver.sonatypeRepo("snapshots")

scalaVersion := "2.13.15"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "7.0.1" % Test

addCommandAlias(
  "validateCode",
  "scalafmtSbtCheck; scalafmtCheckAll; uiCodeStyleCheck"
)
