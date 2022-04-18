/** Frontend build commands. Change these if you are using some other package
  * manager. i.e: Yarn
  */
object FrontendCommands {
  val dependencyInstall: String = "yarn install"
  val prettier: String = "npx prettier --write ."
  val prettierCheck: String = "npx prettier --check ."
  val eslint = "npx eslint --max-warnings 0 --fix ."
  val eslintCheck = "npx eslint --max-warnings 0 ."
  val test: String = "npm run test"
  val serve: String = "npm run start"
  val build: String = "npm run build"
}
