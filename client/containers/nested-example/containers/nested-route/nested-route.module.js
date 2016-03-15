module.exports = {
  path: 'nested',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/nested-route.jsx'));
    });
  }
};
