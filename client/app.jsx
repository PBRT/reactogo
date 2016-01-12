import 'velocity-animate';
import 'bootstrap-webpack';
import './style/app.styl';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { setViewport } from 'viewport.js';

// Pages
import About from './containers/about.jsx';
import Home from './containers/home.jsx';
import Contact from './containers/contact.jsx';
import NotFound from './containers/not-found.jsx';
import Index from './containers/index.jsx';
import Todos from './containers/Todos/todos.jsx';

import { initializeStore, history } from './store/configureStore.js';
const store = initializeStore();

// Main class - App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.debouncedHandleResize = _.debounce(() => {this.handleResize(); }, 100);
  }
  isTouchDevice() {
    return 'ontouchstart' in window // works on most browsers
      || 'onmsgesturechange' in window; // works on ie10
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
        <Router history={history}>
          <Route path='/' component={Index}>
            <IndexRoute component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={About}/>
            <Route path='/todos' component={Todos}/>
          </Route>
          <Route path='*' component={NotFound}/>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
