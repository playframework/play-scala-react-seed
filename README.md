[![MIT License][license-badge]][LICENSE]

# scala-play-react-seed

> scala-play-angular-seed project illustrates how Play Framework can be used to develop backend/services along with Angular to develop the front-end/ui.

Read more @ http://bit.ly/2AStvhK

## Used Versions

* [Play Framework: 2.6.7](https://www.playframework.com/documentation/2.6.x/Home)
* [Angular: 5.0.0](https://angular.io/)
* [Angular CLI: 1.6.0](https://cli.angular.io/)

## How to use it?

### Let's get started,

* Clone the application and open application as a sbt project.

* This application is not using any of the scala play views and all the views are served by the [Angular](https://angular.io/) code base which is inside the `ui` folder.

* Used any of the sbt commands listed in the below according to the requirement which are working fine with this application.(To see more details of [sbt](http://www.scala-sbt.org/))

``` 
    sbt clean           # Clear existing build files
    
    sbt stage           # Build your application from your project’s source directory
    
    sbt run             # Run both backend and frontend builds in watch mode
    
    sbt dist            # Build both backend and frontend sources into a single distribution
    
    sbt test            # Run both backend and frontend unit tests 
```  

## Complete Directory Layout

```
├── /app/                           # The backend (scala) application sources (controllers, models, views, assets)
├── /conf/                          # Configurations files and other non-compiled resources (on classpath)
│     ├── application.conf          # Builds the project from source to output(lib and bower) folder
│     ├── logback.xml               # Logging configuration
│     └── routes                    # Routes definition
├── /logs/                          # Logs folder
│     └── application.log           # Default log file
├── /project/                       # Sbt configuration files
│     ├── FrontendCommands.scala    # Frontend build commands
│     ├── FrontendRunHook.scala     # Frontend build play run hook
│     ├── build.properties          # Marker for sbt project
│     └── plugins.sbt               # Sbt plugins declaration
├── /public/                        # Public assets
│     └── /ui/                      # Frontend build assests
├── /target/                        # Generated stuff
│     ├── /universal/               # Application packaging
│     └── /web/                     # Compiled web assets
├── /test/                          # Contains unit tests for scala play sources
├── /ui/                            # Angular front end sources
│     ├── /e2e/                     # End to end tests folder
│     ├── /node_modules/            # 3rd-party frontend libraries and utilities
│     ├── /src/                     # The frontend source code (modules, componensts, models, directives, services etc.) of the application
│     ├── .angular-cli.json         # Builds the project from source to output(lib and bower) folder
│     ├── .editorconfig             # Define and maintain consistent coding styles between different editors and IDEs
│     ├── .gitignore                # Contains ui files to be ignored when pushing to git
│     ├── karma.conf.js             # Karma configuration file
│     ├── package.json              # Holds various metadata configuration relevant to the ui
│     ├── protractor.conf.js        # Protractor configuration file
│     ├── proxy.conf.json           # UI proxy configuration
│     ├── README.md                 # Contains all user guide details for the ui
│     ├── tsconfig.json             # Contains typescript compiler options
│     └── tslint.json               # Lint rules for the ui
├── .gitignore                      # Contains files to be ignored when pushing to git
├── build.sbt                       # Play application build script
├── LICENSE                         # Contains License Agreement file
├── README.md                       # Contains all user guide details for the application
└── ui-build.sbt                    # UI build scripts
```

## What is new in here?

### FrontendCommands.scala

* Represents available frontend build commands.

```
    ├── /project/
    │     ├── FrontendCommands.scala
```

### FrontendRunHook.scala

* Represents PlayRunHook scala implementation to trigger angular serve with sbt run command.

```
    ├── /project/
    │     ├── FrontendRunHook.scala
```

### ui-build.sbt

* `ui-build.sbt` file to represent UI builds scrips implementations to run along with the available sbt commands.
* This file is located in the root level of the project to work smoothly with the `build.sbt` file.

### npm run commands

* Added several new npm run commands in the `scripts` section of the package.json file in order to work smoothly with the sbt commands.
* Check [UI README.md](./ui/README.md) to see the available front end build tasks.

```
├── /ui/
│     ├── package.json
```

### proxy.conf.json

* Contains proxy configurations required to run application in watch mode along with both `Scala` and `Angular` builds.

```
├── /ui/
│     ├── proxy.conf.json
```

## Routes

```
├── /conf/      
│     ├── routes 
```

* The following route configuration allows to map front end index.html to index route. This should be placed as the first route in this file.

```
GET        /             controllers.Assets.at(path="/public/ui", file="index.html")
```

**Note: _On production build all the front end Angular build artifacts will be copied to the `public/ui` folder._**

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
|[<img src="https://avatars2.githubusercontent.com/u/5279079?s=400&v=4" width="100px;"/><br /><sub>Yohan Gomez</sub>][yohan-profile]| [<img src="https://avatars2.githubusercontent.com/u/6312524?s=400&u=efc9267c6f903c379fafaaf7b3b0d9a939474c01&v=4" width="100px;"/><br /><sub>Lahiru Jayamanna</sub>][lahiru-profile]<br />| [<img src="https://avatars0.githubusercontent.com/u/3881403?s=400&v=4" width="100px;"/><br /><sub>Gayan Attygalla</sub>](https://github.com/Arty26)| [<img src="https://avatars0.githubusercontent.com/u/24251976?s=400&v=4" width="100px;"/><br /><sub>Anuradha Gunasekara</sub>][anuradha-profile]|
| :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

This software is licensed under the MIT license

[license-badge]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license]: https://github.com/yohangz/scala-play-angular-seed/blob/master/LICENSE

[yohan-profile]: https://github.com/yohangz
[lahiru-profile]: https://github.com/lahiruz
[gayan-profile]: https://github.com/Arty26
[anuradha-profile]: https://github.com/sanuradhag