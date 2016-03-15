module.exports = {
  path: 'nested-example',
  indexRoute: require('./containers/nested-index/nested-index.module.js'),
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./containers/nested-route/nested-route.module.js'),
      ]);
    });
  },

  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/nested-example.jsx'));
    });
  }
};

