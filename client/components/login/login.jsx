// Libs
import { connect } from 'react-redux';

// Actions
import { openModal, closeModal } from 'modals.js';
import { login } from 'auth/login.js';

// Components
import ModalContainer from 'modal-container/modal-container.jsx';

let s = getStyle();

let Login = (props) => {

  const { isModalOpen, dispatch } = props;
  return (
    <div>
      <ModalContainer isModalOpen={isModalOpen} closeModal={() => dispatch(closeModal())}>
        <div style={s.container} className='light-white'>
          <div
            onClick={() => dispatch(login())}
            style={s.button}>Login with Facebook</div>
          <div style={s.info}>
            It won't work if you didn't set up the following ENV var :
              <br/>
              <br/>
              <br/>
              <div>FIREBASE_API_KEY</div>
              <div>FIREBASE_AUTH_DOMAIN</div>
              <div>FIREBASE_DATABASE_URL</div>
            <br/>
            <br/>
            <br/>
            You also need to enable Facebook login and set up the callback url as per as firebase doc!
          </div>
        </div>
      </ModalContainer>
      <div
        className='light-white'
        onClick={() => dispatch(openModal())}
        style={Object.assign({}, s.navbarItem, props.itemStyle ? props.itemStyle : {})}>Login</div>
    </div>
  );
};

function getStyle() {
  return {
    container: {
      textAlign: 'center',
      margin: '100px auto',
    },
    button: {
      padding: 20,
      backgroundColor: UI.lightBlue,
      display: 'inline-block',
      cursor: 'pointer',
    },
    navbarItem: {
      display: 'inline-block',
      padding: 20,
      cursor: 'pointer',
    },
    close: {
      position: 'absolute',
      top: 20,
      right: 20,
      width: 12,
    },
    info: {
      marginTop: 20,
    },
  };
}
Login.displayName = 'Login';

export default connect((state) => ({
  viewport: state.get('viewport'),
  isModalOpen: state.get('modals').get('isLoginModalOpen')}))(Login);

