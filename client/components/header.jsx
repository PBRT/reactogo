import { connect } from 'react-redux';
import { Link } from 'react-router';
import Login from '../containers/login/login.jsx';

let s = getStyle();

let Header = (props) =>
  (<div style={s.container}>
    <div style={s.logo}><Link to='home'>ReacToGo</Link></div>
    <div style={s.links}>
      <div style={s.link}><Link to='todos'>Todos</Link></div>
      <div style={s.link}><Link to='about'>About</Link></div>
      <div style={s.link}><Link to='contact'>Contact</Link></div>
      {props.session.isLoggedIn ? <div style={s.profileContainer}>
        <img style={s.profileImage} src={props.session.user.profileImageURL} />
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

export default connect((state) => ({viewport: state.viewport, session: state.session}))(Header);
