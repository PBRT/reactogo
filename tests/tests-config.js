// Content available at http://localhost:3001/webpack-dev-server/tests/tests.html
var context = require.context('../client/', true, /.+\.spec\.js?$/);
context.keys().forEach(context);

module.exports = context;
