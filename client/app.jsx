import 'velocity-animate';
import 'bootstrap-webpack';
import './style/app.styl';

// Components
import ButtonMotion from './components/button-motion.jsx';
import ButtonVelocity from './components/button-velocity.jsx';

var s = getStyle();

// Main class - App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasBeenResized: false,
      isMobile: this.isMobile(),
      isTablet: this.isTablet(),
      isDesktop: this.isDesktop(),
      isTouchDevice: this.isTouchDevice(),
      scrollPosition: window.pageYOffset,
    };
    this.isMobile = this.isMobile.bind(this);
    this.isTablet = this.isTablet.bind(this);
    this.isDesktop = this.isDesktop.bind(this);
    this.isTouchDevice = this.isTouchDevice(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.debouncedHandleResize = _.debounce(() => {this.handleResize();}, 100);
  }
  getChildContext() {
    return {
      isMobile: this.state.isMobile,
      isTablet: this.state.isTablet,
      isDesktop: this.state.isDesktop,
      isTouchDevice: this.state.isTouchDevice,
      hasBeenResized: this.state.hasBeenResized,
      scrollPosition: this.state.scrollPosition,
      s: this.handleStyle,
    };
  }
  isMobile() {
    return (window.innerWidth < UI.breakpointM);
  }
  isTablet() {
    return (!this.isMobile() && (window.innerWidth < UI.breakpointT));
  }
  isDesktop() {
    return (!this.isMobile() && !this.isTablet());
  }
  isTouchDevice() {
    return 'ontouchstart' in window // works on most browsers
      || 'onmsgesturechange' in window; // works on ie10
  }
  handleScroll() {
    this.setState({scrollPosition: window.pageYOffset});
  }
  handleResize() {
    this.setState({
      isMobile: this.isMobile(),
      isTablet: this.isTablet(),
      isDesktop: this.isDesktop(),
      hasBeenResized: !this.state.hasBeenResized,
    });
  }
  componentDidMount() {
    React.initializeTouchEvents(true);
    this.handleResize();
    window.addEventListener('resize', this.debouncedHandleResize);
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedHandleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleStyle(style) {
    let mobile = this.getViewportStyle(style);
    let {tablet, desktop} = style;
    let responsiveStyle;

    if (this.state.isMobile) {
      responsiveStyle = _.clone(mobile);
    } else if (this.state.isTablet) {
      responsiveStyle = _.extend(_.clone(mobile), tablet);
    } else if (this.state.isDesktop) {
      responsiveStyle = _.extend(_.clone(mobile), _.clone(tablet), desktop);
    }

    return responsiveStyle;
  }
  getViewportStyle(styleObject) {
    var mobileObject = {};

    // Build mobile style object
    for (var key in styleObject) {
      if (!_.includes(['tablet', 'desktop'], key)) {
        mobileObject[key] = styleObject[key];
      }
    }

    return mobileObject;
  }
  render() {
    return (
      <div style={s.container}>
        <div className='text-center title'>reacToGO</div>
        <div className='text-center subtitle'>Including webpack, react, velocity, reactmotion, bootstrap, stylus</div>
        <div className='row no-padding' style={s.row}>
          <div className='col-xs-3 col-xs-offset-3 no-padding'>
            React Motion animation
            <ButtonMotion />
          </div>
          <div className='col-xs-3 no-margin'>
            Velocity JS animation
            <ButtonVelocity />
          </div>
        </div>

      </div>
    );
  }
}

function getStyle() {
  return {
    container: {
      marginTop: 100,
      textAlign: 'center',
    },
    row: {
      marginTop: 70,
    },
  };
}

App.childContextTypes = {
  isMobile: React.PropTypes.bool.isRequired,
  isTablet: React.PropTypes.bool.isRequired,
  isDesktop: React.PropTypes.bool.isRequired,
  isTouchDevice: React.PropTypes.bool.isRequired,
  hasBeenResized: React.PropTypes.bool.isRequired,
  scrollPosition: React.PropTypes.number.isRequired,
  s: React.PropTypes.func.isRequired,
};

React.render (<App/>,document.body);
