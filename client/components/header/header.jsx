// Libs
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Components
import Login from 'login/login.jsx';

let s = getStyle();

let Header = (props) =>
  (<div style={s.container}>
    <div style={s.logo}><Link to='/'>ReacToGo</Link></div>
    <div style={s.links}>
      <div style={s.link}><Link to='about'>About</Link></div>
      {props.session.get('isLoggedIn') ? <div style={s.profileContainer}>
        <img style={s.profileImage} src={props.session.get('user').get('profileImageURL')} />
      </div> : <Login />}
    </div>
  </div>);


function getStyle() {
  return {
    container: {
      width: '100%',
      height: 60,
      backgroundColor: UI.lightWhite,
      display: 'flex',
      alignItems: 'center',
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
      color: 'red',
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
