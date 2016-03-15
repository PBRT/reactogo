// Libs
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Components
import Login from 'login/login.jsx';

// Actions
import { logout } from 'auth/login.js';

let s = getStyle();

let Header = (props) =>
  (<div style={s.container}>
    <div style={s.logo}>
      <Link to='/'>
        <span className='light-white'>ReacToGo</span>
      </Link>
    </div>
    <div style={s.links}>
      <div style={s.link}>
        <Link to='about'>
          <span className='light-white'>About</span>
        </Link>
      </div>
      <div style={s.link}>
        <Link to='fetch-example'>
          <span className='light-white'>Fetch data</span>
        </Link>
      </div>
      {props.session.get('isLoggedIn') ? <div className='flex'>
        <div
          onClick={() => props.dispatch(logout())}
          style={s.link}
          className='light-white cursor'>Logout</div>
        <div style={s.profileContainer}>
          <img style={s.profileImage} src={props.session.get('user').get('profileImageURL')} />
        </div>
      </div>: <Login />}
    </div>
  </div>);


function getStyle() {
  return {
    container: {
      width: '100%',
      height: 60,
      backgroundColor: UI.lightGreen,
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.3)',
      position: 'fixed',
      zIndex: 1,
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
      padding: 20,
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
  };
}
Header.displayName = 'Header';

export default connect((state) => ({
  viewport: state.get('viewport'),
  session: state.get('session')
}))(Header);
