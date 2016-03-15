module.exports = {
  path: '/fetch-example',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/fetch-example.jsx'));
    });
  }
};
