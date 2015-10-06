# reacToGo

Kickstater project for quickly build your SAP including the last features of the web. The projects contains a skeletton of an app and example of components. It's an ALL-IN-ONE :
  * [Stylus preprocessing](https://learnboost.github.io/stylus/)
  * [Webpack building and webpack dev server](http://webpack.github.io/)
  * [React](https://facebook.github.io/react/)
  * [React Motion](https://github.com/chenglou/react-motion)
  * [VelocityJS](http://julian.com/research/velocity/)
  * [Bootstrap (imported with webpack)](https://github.com/gowravshekar/bootstrap-webpack)
  * Global UI kit
  * Media queries with React Context

## Motivations

Tired to build all time the same basic structure for POC/Production projects, I built this kickstarter to get in speed easily.

## Installation

Simply for this project on your local machine and then : 

``` cd reacToGo ```

``` npm install ```

``` webpack-dev-server ```


And go to `http://localhost:8080`in your favourite browser

## Features

  * Bootstrap: Included via webpack, you can configure the item you want in the `/node_modules/bootstrap-webpack/bootstrap.config.less`. By default only the grid system is active.
  * Stylus: There is a default font and class in the `style` folder you can use
  * Images: Webpack handle the loading of all your images and files : `file-loader` 
  * VelocityJS: Powerful animation lib to give life
  * ReactMotion: Physical animation lib
  * UI Kit: the `UI.js` file is included globally. You can access to the value with `UI`. It contain all the JS var needed to build your UI kit (breakpoints, animations, size...)
  * Media Queries: Part of the `app.jsx` file and then included in the global context, you can access to them thanks to the context object in all the childs. Check the Button example. 
