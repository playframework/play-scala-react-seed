[![MIT License][license-badge]][LICENSE]

# Scala Play React Seed

> Use play framework to develop the web application backend/services and frontend using React Create App, all in a totally integrated workflow and single unified console. This approach will deliver perfect development experience without CORS hassle.


Read more @ http://bit.ly/2A1AzEq

[![Scala Play React Seed](https://github.com/playframework/play-scala-react-seed/blob/main/react.png)](http://bit.ly/2A1AzEq)

## Version Summary

* [Play Framework: 2.8.19](https://www.playframework.com/documentation/2.8.19/Home)
* [React: 18.2.0](https://reactjs.org/)
* [Create React App: 5.0.1](https://github.com/facebookincubator/create-react-app)

## How to use it?

### Prerequisites

* [Node.js](https://nodejs.org/)
* [scala](https://www.scala-lang.org/download/)

### Let's get started,

* Fork or clone this repository.

* Used any of the following [SBT](http://www.scala-sbt.org/) commands which will intern trigger frontend associated npm scripts.

```
    sbt clean           # Clean existing build artifacts

    sbt stage           # Build your application from your project’s source directory

    sbt run             # Run both backend and frontend builds in watch mode

    sbt dist            # Build both backend and frontend sources into a single distribution artifact

    sbt test            # Run both backend and frontend unit tests
```

* This seed is not using [scala play views](https://www.playframework.com/documentation/2.6.x/ScalaTemplates). All the views and frontend associated routes are served via [React](https://reactjs.org/) code base under `ui` directory.

## Complete Directory Layout

```
├── /app/                                 # The backend (scala play) sources (controllers, models, services)
│     └── /controllers/                   # Backend controllers
│           └── FrontendController.scala  # Asset controller wrapper serving frontend assets and artifacts
├── /conf/                                # Configurations files and other non-compiled resources (on classpath)
│     ├── application.conf                # Play application configuratiion file.
│     ├── logback.xml                     # Logging configuration
│     └── routes                          # Routes definition file
├── /logs/                                # Log directory
│     └── application.log                 # Application log file
├── /project/                             # Contains project build configuration and plugins
│     ├── FrontendCommands.scala          # Frontend build command mapping configuration
│     ├── FrontendRunHook.scala           # Forntend build PlayRunHook (trigger frontend serve on sbt run)
│     ├── build.properties                # Marker for sbt project
│     └── plugins.sbt                     # SBT plugins declaration
├── /public/                              # Frontend build artifacts will be copied to this directory
├── /target/                              # Play project build artifact directory
│     ├── /universal/                     # Application packaging
│     └── /web/                           # Compiled web assets
├── /test/                                # Contains unit tests of backend sources
├── /ui/                                  # React frontend source (based on Create React App)
│     ├── /public/                        # Contains the index.html file
│     ├── /node_modules/                  # 3rd-party frontend libraries and utilities
│     ├── /src/                           # The frontend source codebase of the application
│     ├── .editorconfig                   # Define and maintain consistent coding styles between different editors and IDEs
│     ├── .gitignore                      # Contains ui files to be ignored when pushing to git
│     ├── package.json                    # NPM configuration of frontend source
│     ├── README.md                       # Contains all user guide details for the ui
│     └── yarn.lock                       # Yarn lock file
├── .gitignore                            # Contains files to be ignored when pushing to git
├── build.sbt                             # Play application SBT configuration
├── LICENSE                               # License Agreement file
├── README.md                             # Application user guide
└── ui-build.sbt                          # SBT command hooks associated with frontend npm scripts 
```

## What is new in here?

### FrontendCommands.scala

* Frontend build command mapping configuration.

```
    ├── /project/
    │     ├── FrontendCommands.scala
```


### FrontendRunHook.scala

* PlayRunHook implementation to trigger ``npm run start`` on ``sbt run``.

```
    ├── /project/
    │     ├── FrontendRunHook.scala
```

### FrontendController.scala

* Asset controller wrapper serving frontend assets and artifacts.

```
    ├── /app/                                 
    │     └── /controllers/                   
    │           └── FrontendController.scala
```

### ui-build.sbt

* This file contains the build task hooks to trigger frontend npm scripts on sbt command execution.

### npm run commands

* New and modified npm scripts of [Create React App](https://github.com/facebookincubator/create-react-app) generated package.json.
* Check [UI README.md](./ui/README.md) to see all available frontend build tasks.

```
├── /ui/                       
│     ├── package.json          
```

## Routes

```
├── /conf/      
│     ├── routes
```

* The following route configuration map index.html to entry route (root). This should be placed as the initial route.

```
GET        /             controllers.FrontendController.index()
```

* All API routes should be prefixed with API prefix defined under ``application.conf`` (Default prefix ``apiPrefix = "api"``)

Example API route:

```
GET        /api/summary  controllers.HomeController.appSummary
```

* The following route is being used to serve frontend associated build artifacts (css, js) and static assets (images, etc.). This should be placed as the final route.

```
GET        /*file        controllers.FrontendController.assetOrDefault(file)
```

**Note: _On production build all the front end React build artifacts will be copied to the `public` folder._**

## Can be used to implement any front end/ui build!

* Simply replace the ui directory with the build of your choice
* Make output directory ROOT/public/
* Implement a proxy to localhost:9000

## Dockerizing your application.

Play's plugin already includes the [SBT Native Packager](https://www.scala-sbt.org/sbt-native-packager/) in your project, so containerizing your application is pretty straightforward.

### ui-build.sbt

`ui-build.sbt` needs to be told that we want to build our production code when we publish a docker container. Add the following line to `ui-build.sbt`.
```sbt
publishLocal in Docker := ((publishLocal in Docker) dependsOn `ui-prod-build`).value
```

### Configuration

In order to run a docker container, a few configuration changes need to be made. First, add
```conf
play.server.pidfile.path=/dev/null
```
to your conf/application.conf file. Each docker container is a single process, so we don't need play to monitor a pidfile.
Next, because the docker container will be running a production version of the build, we need to tell it to get a valid application secret from the container's environment.

`conf/application.conf` already has a `play.http.secret.key` entry. Add the following line _after_ the already-present line.
```conf
play.http.secret.key=${?APPLICATION_SECRET}
```

### Logging

Logging in a docker container is generally done to STDOUT, and then fetched with the `docker logs` command. The default logging set up in this project is to include writing out to a file at /opt/docker/logs/application.log.

To solve this, we'll get rid of the file appender in `conf/logback.xml`. Remove the following lines:

```xml
  <appender name="FILE" class="ch.qos.logback.core.FileAppender">
    <file>${application.home:-.}/logs/application.log</file>
    <encoder>
      <pattern>%date [%level] from %logger in %thread - %message%n%xException</pattern>
    </encoder>
  </appender>
  ...
  <appender name="ASYNCFILE" class="ch.qos.logback.classic.AsyncAppender">
    <appender-ref ref="FILE" />
  </appender>
```

### Creating and Running your container

To build the new docker container, run:
```
sbt docker:publishLocal
```
And to run it, use:
```
docker run -i -t -p 9000:9000 -e APPLICATION_SECRET=$MY_APP_SECRET <project-name>:<project-version>
```

## Looking for some other frontend framework or language choice

* [Play Java React Seed](https://github.com/playframework/play-java-react-seed)
* [Play Scala Angular Seed](https://github.com/playframework/play-scala-angular-seed)
* [Play Java Angular Seed](https://github.com/playframework/play-java-angular-seed)
* [Scala Play Vuejs Seed](https://github.com/duncannevin/scala-play-vue-seed) by [Duncan Nevin](https://github.com/duncannevin)
* [Java Play Vuejs Seed](https://github.com/duncannevin/java-play-vue-seed) by [Duncan Nevin](https://github.com/duncannevin)

## License

This software is licensed under the MIT license

[license-badge]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license]: https://github.com/playframework/play-java-react-seed/blob/main/README.md
