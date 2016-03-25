![alt tag](https://raw.githubusercontent.com/PBRT/reactogo/master/logo.png)

A simple boilerplate including the best concepts and libraries related to React/Redux and some basic UI components such as Modal or Side Menu. Everything ready to build a performant, immutable and responsive web application.

Check out the live version at [https://reactogo.herokuapp.com](https://reactogo.herokuapp.com).

This boilerplate includes :

  * [Bootstrap (imported with webpack)](https://github.com/gowravshekar/bootstrap-webpack)
  * [Fetch API](https://github.com/github/fetch)
  * [Firebase](https://www.firebase.com)
  * [Fontastic Icons](http://fontastic.me/)
  * [ImmutableJS](https://facebook.github.io/immutable-js/)
  * [React Hot Loader](http://gaearon.github.io/react-hot-loader)
  * [React Modal](https://github.com/rackt/react-modal)
  * [React Motion](https://github.com/chenglou/react-motion)
  * [React Router](https://github.com/rackt/react-router)
  * [React](https://facebook.github.io/react/)
  * [Redux Immutable](https://github.com/indexiatech/redux-immutablejs)
  * [Redux React Router](https://github.com/reactjs/react-router-redux)
  * [Redux](http://redux.js.org/)
  * [Side Menu Mobile](https://github.com/Mango/slideout)
  * [Stylus preprocessing](https://learnboost.github.io/stylus/)
  * [VelocityJS](http://julian.com/research/velocity/)
  * [Webpack building and webpack dev server](http://webpack.github.io/)
  * SVG Spinner
  * Global UI Kit
  * ExpressJS

## Motivations

I spent a lot of time to make these differents librairies work together. For avoiding to re-do it for every projects I'm working on, I decide to build this kickstarter, and update it as soon as needed!

## Installation

Simply for this project on your local machine and then :

``` cd reacToGo ```
``` npm install ```
``` npm run start ```

And go to [localhost:3000](http://localhost:3000) in your favourite browser.
It will start the ```webpack-dev-server``` on the 3000 port and proxy all the requests to your future production server (expressjs) on the port 9000. This enable to have automatic reload on server side code update.

Also, the ```hot``` mode is set to true, i.e. you can update the style, the JSX code and the app will be updated keeping the state without reloading the page.

## Environement variables

You need to set up your Firebase environment variable to have the login system. In your firebase app, you need to set up the facebook auth and put this in your variables :

```export FIREBASE_URL="https://YOUR-APP.firebaseio.com"```


## Features

  * Bootstrap: Included via webpack, you can configure the item you want in the `/node_modules/bootstrap-webpack/bootstrap.config.less`. By default only the grid system is active.
  * Stylus: There is a default font and class in the `style` folder you can use
  * Images: Webpack handle the loading of all your images and files : `file-loader` 
  * VelocityJS: Powerful animation lib to give life
  * React Router: Handle basic navigation between pages, part of the global state of the app.
  * React Motion: Physical animation lib
  * UI Kit: the `/style/ui-kit.json` file is included globally. You can access to the value with `UI`. It contain all the JS var needed to build your UI kit (breakpoints, animations, size...)
  * Media Queries: Included in the global state of the app. Accessible with functions in ```globals/style.js```.
  * Data : Handle by Redux in a global IMMUTABLE state of the app. Check the model section underneath.
  * Firebase facebook login
  * React Modals
  * React Hot Loader: Update your react components without reload the page and keeping the main state!
  * Side Menu responsive

## UI Kit and Customization

#### Bootstrap Components

If you want more bootstrap components, check the ```bootstrap.config.js``` file and allow all the components you wants. This file is after copyied in the dist folder for further build.

#### UI Kit

The UI KIT is defined is the ```style/ui-kit.json```. It's accessible in both JS and Stylus with create only one source of truth for the UI Kit of the app :
- JS: It's loaded with the ```json-loader``` of webpack and exposed globally via the ```ProvidePlugin``` under the name of ```UI```. So you can simply use it for inline-style directly in the React components files without even require it:

```
let s = getStyle();

let MyReactComp = () => <div style={s.container}>My React Comp</div>;

function getStyle() {
  return {
    container: {
      textAlign: 'center',
      marginTop: 60,
      color: UI.lightGreen,
    },
  };
}
MyReactComp.displayName = 'MyReactComp';

export default MyReactComp;
```


- STYLUS/CSS: The same file ```style/ui-kit.json``` is also loaded in the ```style/app.styl```. So the same UI-KIT can be use also for define main app classes if needed:

```
.button
  padding: 10px
  box-shadow: inset 0px -2px 0px rgba(0,0,0,0.10)
  font-size: fontSM px
  display: inline-block
  border-radius: 2px
  text-align: center
  cursor: pointer

@media (min-width: breakpointT px)
  .button
    padding: 10px 20px

.button-primary
  background-color: lightGreen
  color: lightWhite
  transition: background-color 0.4s;
.button-primary:hover
  background-color: darkGreen
```

This way, you can both use inline-style or stylus or both at the same time without any duplication of UI-KIT and then keep the things tidy!

```
let s = getStyle();

let MyReactButton = () => <div style={s.container} className='button button-primary'>My React Button</div>;

function getStyle() {
  return {
    container: {
      textAlign: 'center',
      marginTop: 60,
      color: UI.lightGreen,
    },
  };
}
MyReactButton.displayName = 'MyReactButton';

export default MyReactButton;
```

## Redux Model

Thanks to redux and its middlewares, the app state contain everything needed to modelling the UI of your app. Here is the schema of the current model (customizable of course):
  * Routing: Thanks to [Redux React Router](https://github.com/reactjs/react-router-redux) the current route and the params are hosted in the global state and handle via Action/Reducer.
  * Viewport:
    * isMobile: bool
    * isTablet: bool
    * isDesktop: bool
    Used for handle the media queries with inline css. Theses state are handled in the ```reducers/viewport-reducer.js``` reducer. Each time the window is resized, a debounced function will dispatch the action and update the state. Hence, in each components connected with [React Redux](https://github.com/rackt/react-redux) will be re-render. This way, if you use the ```handleStyle``` function contained in the ```globals/style.js``` you can describe in inline css the style of your component on three differents viewports. Check the function for more informations
  * Session:
    * Token: auth token by Firebase
    * uid: User id
    * provider: facebook
    * user: User info from facebook
  * Modals:
    * isLoginModalOpen: bool
  * Side Menu:
    * isSideMenuOpen: bool
  * Toaster:
    * List of messages: []

## Redux Librairies

  * [Redux](http://redux.js.org/)
  * [React Redux](https://github.com/rackt/react-redux): Connection with React comp
  * [Redux React Router](https://github.com/reactjs/react-router-redux): Bridge with React Router
  * [Redux Thunk](https://github.com/gaearon/redux-thunk): Enable to dispatch functions
  * [Redux Logger](https://github.com/fcomb/redux-logger): Debugger in the console
  * [Redux Immutable](https://github.com/indexiatech/redux-immutablejs): Global immutable state

## Production

All the build scripts are in the ```package.json``` file. If you want to build locally, simply run ```npm run build```. It will trigger the ```webpack.production.config.js``` build system and will put you everything under the ```dist``` folder.


## Deployment

For deploying the APP, simply push it to your CI app. There's already the ```npm postinstall``` script setup for you. If you are using [Heroku](https://www.heroku.com) the ```Procfile``` is already set up.

If you want to do it manually, simply copy the following command and customize it if needed:
```webpack --config webpack.production.config.js```

## Webpack

Here's the list of the Webpack dependencies and plugins:

* [Webpack-Dev-Server](https://webpack.github.io/docs/webpack-dev-server.html): Used for development.
* [Copy Webpack Plugin](https://github.com/kevlened/copy-webpack-plugin): Copy the server and config files to production.
* [Clean Webpack Plugin](https://github.com/johnagan/clean-webpack-plugin): Clean the dist folder.
* [DedupePlugin](https://github.com/webpack/docs/wiki/optimization) and [UglifyJsPlugin]((https://github.com/webpack/docs/wiki/optimization)): for optimizing the build size.
* [ProvidePlugin](https://webpack.github.io/docs/list-of-plugins.html#provideplugin): For exposing global values such as the UI KIT or Velocity.


## TO DO

  * Handle the Fetch Call in a Redux Way
  * Production store configuration
  * Implement testing (JEST/other)
