### ReacToGo

Kickstater project for quickly build your SAP including the last features of the web. The projects contains a skeletton of an app and example of components. It's an ALL-IN-ONE :
  * [Stylus preprocessing](https://learnboost.github.io/stylus/)
  * [Webpack building and webpack dev server](http://webpack.github.io/)
  * [Stylus export loader] (https://github.com/PBRT/stylus-export-loader)
  * [React](https://facebook.github.io/react/)
  * [React Router](https://github.com/rackt/react-router)
  * [React Motion](https://github.com/chenglou/react-motion)
  * [Redux](http://redux.js.org/)
  * [VelocityJS](http://julian.com/research/velocity/)
  * [Bootstrap (imported with webpack)](https://github.com/gowravshekar/bootstrap-webpack)
  * Global UI kit
  * Media queries with React Context
  * ExpressJS

## Motivations

Tired to build all time the same basic structure for POC/Production projects, I built this kickstarter to get in speed easily.

## Installation

Simply for this project on your local machine and then : 

``` cd reacToGo ```

``` npm install ```

``` npm run start ```

And go to `http://localhost:3000`in your favourite browser. It will start the ```webpack-dev-server``` on the 3000 port and proxy all the requests to your future production server (expressjs) on the port 9000. So you can also develop all your endpoints while having hot reload enable.

## Features

  * Bootstrap: Included via webpack, you can configure the item you want in the `/node_modules/bootstrap-webpack/bootstrap.config.less`. By default only the grid system is active.
  * Stylus: There is a default font and class in the `style` folder you can use
  * Images: Webpack handle the loading of all your images and files : `file-loader` 
  * VelocityJS: Powerful animation lib to give life
  * React Router: Handle basic navigation between pages, part of the global state of the app.
  * React Motion: Physical animation lib
  * UI Kit: the `UI.js` file is included globally. You can access to the value with `UI`. It contain all the JS var needed to build your UI kit (breakpoints, animations, size...)
  * Media Queries: Included in the global state of the app. Accessible with functions in ```globals/style.js```.
  * Data : Handle by Redux as a global state of the app. Check the model section underneath.

## UI Customisation

If you want more bootstrap components, check the ```bootstrap.config.js```file and allow all the components you wants. This file is after copyied in the dist folder for further build.

## Redux Model

Thanks to redux and its middlewares, the app state contain everything needed to modelling the UI of your app. Here is the schema of the current model (customizable of course):
  * Routing: Thanks to [Redux Simple Router](https://github.com/rackt/redux-simple-router) the current route and the params are hosted in the global state and handle via Action/Reducer.
  * Viewport:
    * isMobile: bool
    * isTablet: bool
    * isDesktop: bool
    Used for handle the media queries with inline css. Theses state are handled in the ```reducers/viewport-reducer.js``` reducer. Each time the window is resized, a debounced function will dispatch the action and update the state. Hence, in each components connected with [React Redux](https://github.com/rackt/react-redux) will be re-render. This way, if you use the ```handleStyle``` function contained in the ```globals/style.js``` you can describe in inline css the style of your component on three differents viewports. Check the function for more informations
  * Todos: Model for the Todos example. More detail at the [Redux Tutorial Page](http://redux.js.org/docs/basics/index.html)

## Redux Librairies

  * [Redux](http://redux.js.org/)
  * [React Redux](https://github.com/rackt/react-redux): Connection with React comp
  * [Redux Simple Router](https://github.com/rackt/redux-simple-router): Bridge with React Router
  * [Redux Thunk](https://github.com/gaearon/redux-thunk): Enable to dispatch functions
  * [Redux Logger](https://github.com/fcomb/redux-logger): Debugger in the console

## Production

```npm run build``

It will run the gulp task building for you a dist folder, copying the server one and running the webpack build using ```UglifyJsPlugin``` and ```DedupePlugin```. You can test your optimised build by running :

```node dist/server/server.js```


## Deployment

I built my website using this boilerplate and deployed it to heroku the others ones. The Procfile is already set up so basically you just need to add your remote, push your master branch and see your app ALIVE!
The build gulp task is called in the ```npm postinstall``` so everything is handled.

## TO DO

  * Build the main component in an isomorphic way to be SEO friendly
  * OAUTH with Firebase
  * Production store configuration

