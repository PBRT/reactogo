// Utils
import { connect } from 'react-redux';
import { slideoutInst } from 'slideout.js';
import { handleStyle } from 'style.js';

// Actions
import { openSideMenu, closeSideMenu } from 'side-menu.js';

//Components
import Header from 'header/header.jsx';
import Toaster from 'toaster/toaster.jsx';
import SideMenu from 'side-menu/side-menu.jsx';

let s = getStyle();
let slider;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.viewport.get('isMobile')) {
      slider = slideoutInst();
      this.attachListener();
    }
  }
  attachListener() {
    slider.on('open', () => this.props.dispatch(openSideMenu()));
    slider.on('close', () => this.props.dispatch(closeSideMenu()));
  }
  removeListener() {
    slider.off('translatestart', 'close');
  }
  componentDidUpdate(prevProps) {
    const isMobile = this.props.viewport.get('isMobile');

    if (prevProps.viewport.get('isMobile') && !isMobile) {
      slider.destroy();
      this.removeListener();
    } else if (!prevProps.viewport.get('isMobile') && isMobile) {
      slider = slideoutInst();
      this.attachListener();
    }

    if (prevProps.isSideMenu !== this.props.isSideMenu && isMobile) {
      if (this.props.isSideMenu) {
        slider.open();
        $(this.refs.overlay).velocity('fadeIn', 100);
      } else {
        slider.close();
        $(this.refs.overlay).velocity('fadeOut', 100);
      }
    }
  }
  render() {
    const props = this.props;
    const isMobile = this.props.viewport.get('isMobile');

    return (<div>
      <Toaster/>
      {isMobile && <div id='menu'><SideMenu/></div>}
      <div id='panel'>
        <Header />
        {isMobile && <div
          ref='overlay'
          style={s.overlay}
          onClick={() => props.dispatch(closeSideMenu())}/>}
        <div style={handleStyle(s.pageContainer)}>
          {props.children}
        </div>
      </div>
    </div>);
  }
}

function getStyle() {
  return {
    overlay: {
      width: '100%',
      height: window.innerHeight,
      backgroundColor: 'rgba(0,0,0,0.4)',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 9999,
      display: 'none',
    },
    pageContainer: {
      paddingTop: UI.headerHeight,
      backgroundColor: UI.lightWhite,
      minHeight: window.innerHeight,
    },
  };
};

Index.displayName = 'Index';

export default connect((state) => ({
  isSideMenu: state.get('sideMenu').get('isSideMenuOpen'),
  viewport: state.get('viewport'),
}))(Index);
