// Dependencies
import 'velocity-animate';
import './style/app.styl';
import './style/icon/styles.css';

// Actions
import { setViewport } from 'viewport.js';

// Utils
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { initializeStore } from './store/configureStore.js';
import { initializeApp } from 'firebase-conf.js';

// Pages
import Index from './containers/index/index.jsx';

var FastClick = require('fastclick');
FastClick.attach(document.body);

// Firebase
initializeApp();

const rootRoute = {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: Index,
    indexRoute: require('./containers/home/home.module.js'),
    childRoutes: require('./containers/containers.module.js'),
  }]
};

const store = initializeStore();
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.get('routing').toJS()
});

// Main class - App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.debouncedHandleResize = _.debounce(() => {this.handleResize(); }, 100);
  }
  handleResize() {
    store.dispatch(setViewport(window.innerWidth));
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.debouncedHandleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedHandleResize);
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={rootRoute} />
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
