module.exports = {
  path: 'about',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/about.jsx'));
    });
  }
};
