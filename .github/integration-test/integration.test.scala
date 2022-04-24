//> using scala "2.13.8"
//> using lib "org.scalatestplus::selenium-3-141:3.2.10.0"
//> using lib "org.scalatest::scalatest-wordspec:3.2.10"
//> using lib "org.scalatest::scalatest-shouldmatchers:3.2.10"

import org.scalatest.wordspec.AnyWordSpec
import org.scalatest.matchers.should._
import org.scalatestplus.selenium._
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.scalatest.OptionValues
import org.scalatest.concurrent.Eventually
import scala.concurrent.duration._

class IntegrationTestSuite
    extends AnyWordSpec
    with Matchers
    with WebBrowser
    with OptionValues
    with Eventually {

  implicit override val patienceConfig =
    PatienceConfig(timeout = 60.seconds, interval = 100.millis)

  implicit val webDriver: WebDriver = new ChromeDriver

  val port = sys.props
    .get("application.port")
    .getOrElse(
      throw new IllegalArgumentException("Application port must be provided.")
    )
  val host = s"http://localhost:$port"

  "Application" should {
    "work" in {
      eventually {
        go to host
        find(
          tagName("h1")
        ).value.text shouldEqual "Welcome to Scala Play React Seed!"
      }
    }
  }
}
