// Libs
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Components
import Login from 'login/login.jsx';

// Actions
import { logout } from 'auth/login.js';
import { openSideMenu } from 'side-menu.js';

let s = getStyle();

let Header = (props) =>
  (<div style={s.container}>
    <div style={s.logo}>
      <Link to='/'>
        <span className='light-white'>ReacToGo</span>
      </Link>
    </div>
    {!props.viewport.get('isMobile') ?<div style={s.links}>
      <div style={s.link} className='flex flex-center'>
        <Link to='about' style={s.anchorLink}>
          <span className='light-white'>About</span>
        </Link>
      </div>
      <div style={s.link} className='flex flex-center'>
        <Link to='fetch-example' style={s.anchorLink}>
          <span className='light-white'>Fetch data</span>
        </Link>
      </div>
      <div style={s.link} className='flex flex-center'>
        <Link to='nested-example' style={s.anchorLink}>
          <span className='light-white'>Nested Routes</span>
        </Link>
      </div>
      {props.session.get('isLoggedIn') ? <div className='flex flex-center'>
        <div
          onClick={() => props.dispatch(logout())}
          style={s.link}
          className='light-white cursor'>Logout</div>
        <div style={s.profileContainer}>
          <img style={s.profileImage} src={props.session.get('user').get('profileImageURL')} />
        </div>
      </div>: <Login />}
    </div> :
    <div className='flex-1 text-right' style={s.menuIcon}>
      <i
        onClick={() => props.dispatch(openSideMenu())}
        className='icon-menu light-white cursor'></i>
    </div>}
  </div>);


function getStyle() {
  return {
    container: {
      width: '100%',
      height: `${UI.headerHeight}px`,
      backgroundColor: UI.lightGreen,
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.3)',
      position: 'fixed',
      zIndex: 1,
      top: 0,
    },
    logo: {
      flex: 'initial',
      padding: 20,
      cursor: 'pointer',
    },
    links: {
      flex: 1,
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    link: {
      cursor: 'pointer',
    },
    profileContainer: {
      padding: '10px 20px',
      cursor: 'pointer',
    },
    profileImage: {
      borderRadius: 100,
      width: 40,
    },
    menuIcon: {
      marginRight: 20,
    },
    anchorLink: {
      padding: 20,
    },
  };
}
Header.displayName = 'Header';

export default connect((state) => ({
  viewport: state.get('viewport'),
  session: state.get('session')
}))(Header);
