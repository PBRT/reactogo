### ReacToGo

Kickstater project for quickly build your SAP including the last features of the web. The projects contains a skeletton of an app and example of components. It's an ALL-IN-ONE :
  * [Stylus preprocessing](https://learnboost.github.io/stylus/)
  * [Webpack building and webpack dev server](http://webpack.github.io/)
  * [Stylus export loader] (https://github.com/PBRT/stylus-export-loader)
  * [React](https://facebook.github.io/react/)
  * [React Motion](https://github.com/chenglou/react-motion)
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
  * ReactMotion: Physical animation lib
  * UI Kit: the `UI.js` file is included globally. You can access to the value with `UI`. It contain all the JS var needed to build your UI kit (breakpoints, animations, size...)
  * Media Queries: Part of the `app.jsx` file and then included in the global context, you can access to them thanks to the context object in all the childs. Check the Button example. 
## Customisation

If you want more bootstrap components, check the ```bootstrap.config.js```file and allow all the components you wants. This file is after copyied in the dist folder for further build.

## Production

```npm run build``

It will run the gulp task building for you a dist folder, copying the server one and running the webpack build using ```UglifyJsPlugin``` and ```DedupePlugin```. You can test your optimised build by running :

```node dist/server/server.js```


## Deployment

I built my website using this boilerplate and deployed it to heroku the others ones. The Procfile is already set up so basically you just need to add your remote, push your master branch and see your app ALIVE!
The build gulp task is called in the ```npm postinstall``` so everything is handled.

## TO DO

  * Build the main component in an isomorphic way to be SEO friendly
  * Add a MongoDB database

