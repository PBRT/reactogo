module.exports = {
  path: '*',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/not-found.jsx'));
    });
  }
};
