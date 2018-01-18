[![MIT License][license-badge]][LICENSE]

# Scala Play React Seed

> scala-play-react-seed project illustrates how Play Framework can be used to develop backend/services along with [React](https://reactjs.org/) to develop the front-end/ui.

Read more @ http://bit.ly/2A1AzEq

## Used Versions

* [Play Framework: 2.6.9](https://www.playframework.com/documentation/2.6.x/Home)
* [React: 16.2.0](https://reactjs.org/)
* [Create React App: 1.0.17](https://github.com/facebookincubator/create-react-app)

## How to use it? 

### Prerequisites

* This assumes that you have [npm](https://npmjs.org/) installed.
* Must have [scala](https://www.scala-lang.org/download/) installed.

### Let's get started,

* Clone the application and open application as a sbt project.

* This application is not using any of the [scala](https://www.playframework.com/documentation/2.6.x/ScalaHome) play views and all the views are served by the [React](https://reactjs.org/) code base which is inside the `ui` folder.

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
│     ├── FrontendRunHook.scala     # Forntend build PlayRunHook (trigger frontend serve on sbt run)
│     ├── build.properties          # Marker for sbt project
│     └── plugins.sbt               # Sbt plugins declaration
├── /public/                        # Frontend build artifacts will be copied to this directory
├── /target/                        # Generated stuff
│     ├── /universal/               # Application packaging
│     └── /web/                     # Compiled web assets
├── /test/                          # Contains unit tests for java play sources
├── /ui/                            # React front end sources
│     ├── /public/                  # Contains the index.html file
│     ├── /node_modules/            # 3rd-party frontend libraries and utilities
│     ├── /src/                     # The frontend source code (modules, componensts, models, directives, services etc.) of the application
│     ├── .editorconfig             # Define and maintain consistent coding styles between different editors and IDEs
│     ├── .gitignore                # Contains ui files to be ignored when pushing to git
│     ├── package.json              # Holds various metadata configuration relevant to the ui
│     ├── README.md                 # Contains all user guide details for the ui
│     └── yarn.lock                 # Yarn lock file
├── .gitignore                      # Contains files to be ignored when pushing to git
├── build.sbt                       # Play application build script
├── LICENSE                         # Contains License Agreement file
├── README.md                       # Contains all user guide details for the application
└── ui-build.sbt                    # Associated frontend build scripts with sbt
```

## What is new in here?

### FrontendCommands.scala

* Represents available frontend build commands.

```
    ├── /project/
    │     ├── FrontendCommands.scala
```


### FrontendRunHook.scala

* Represents PlayRunHook scala implementation to trigger react start with sbt run command.

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

## Routes

```
├── /conf/      
│     ├── routes 
```

* The following route configuration allows to map front end index.html to index route. This should be placed as the first route in this file.

```
GET        /             controllers.Assets.at(path="/public", file="index.html")
```

* THe following asset route is being used to serve all the build artifacts (css, js) and static files (images, etc.). This should be placed as the last route in route config file.

```
GET        /*file        controllers.Assets.at(path="/public", file)
```

**Note: _On production build all the front end React build artifacts will be copied to the `public` folder._**

## Can be used to implement any front end/ui build!

* Simply replace the ui directory with the build of your choice
* Make output directory ROOT/public/
* Implement a proxy to localhost:9000

## Looking for some other frontend framework or language choice

* [Java Play React Seed](https://github.com/yohangz/java-play-react-seed)
* [Scala Play Angular Seed](https://github.com/yohangz/scala-play-angular-seed)
* [Java Play Angular Seed](https://github.com/yohangz/java-play-angular-seed)
* [Scala Play Vuejs Seed](https://github.com/duncannevin/scala-play-vue-seed) by [Duncan Nevin](https://github.com/duncannevin)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
|[<img src="https://avatars2.githubusercontent.com/u/5279079?s=400&v=4" width="100px;"/><br /><sub>Yohan Gomez</sub>][yohan-profile]| [<img src="https://avatars2.githubusercontent.com/u/6312524?s=400&u=efc9267c6f903c379fafaaf7b3b0d9a939474c01&v=4" width="100px;"/><br /><sub>Lahiru Jayamanna</sub>][lahiru-profile]<br />| [<img src="https://avatars0.githubusercontent.com/u/3881403?s=400&v=4" width="100px;"/><br /><sub>Gayan Attygalla</sub>](https://github.com/Arty26)|
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

This software is licensed under the MIT license

[license-badge]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license]: https://github.com/yohangz/java-play-react-seed/blob/master/README.md

[yohan-profile]: https://github.com/yohangz
[lahiru-profile]: https://github.com/lahiruz
[gayan-profile]: https://github.com/Arty26
