/** Frontend build commands. Change these if you are using some other package
  * manager. i.e: Yarn
  */
object FrontendCommands {
  val dependencyInstall: String = "yarn install"
  val codeStyle: String = "npx prettier --write . && npx eslint --max-warnings 0 --fix ."
  val codeStyleCheck: String = "npx prettier --check . && npx eslint --max-warnings 0 ."
  val test: String = "npm run test"
  val serve: String = "npm run start"
  val build: String = "npm run build"
}
