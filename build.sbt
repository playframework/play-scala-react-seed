name := """scala-play-react-seed"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava).settings(
  watchSources ++= (baseDirectory.value / "public/ui" ** "*").get
)

resolvers += Resolver.sonatypeRepo("snapshots")

scalaVersion := "2.12.2"

val jaxbVersion = "2.3.0"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test
libraryDependencies += "com.h2database" % "h2" % "1.4.196"

libraryDependencies += "javax.xml.bind" % "jaxb-api" % jaxbVersion
libraryDependencies += "com.sun.xml.bind" % "jaxb-core" % jaxbVersion
libraryDependencies += "com.sun.xml.bind" % "jaxb-impl" % jaxbVersion

libraryDependencies += "javax.activation" % "activation" % "1.1.1"

