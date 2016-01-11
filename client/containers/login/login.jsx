import { connect } from 'react-redux';
import Modal from 'react-modal';

import { openModal, closeModal } from 'modals.js';
import { login } from 'login.js';

let s = getStyle();

let Login = (props) => {

  const { isModalOpen, dispatch } = props;
  return (
    <div>
      <Modal
        className='Modal__Bootstrap modal-dialog'
        isOpen={isModalOpen}
        style={{overlay: {backgroundColor: 'none', overflow: 'hidden'}}}>
          <div style={s.container}>
            <img style={s.close} src={require('./assets/close.png')} onClick={() => dispatch(closeModal())}/>
            <div
              onClick={() => dispatch(login())}
              style={s.button}>Login with Facebook</div>
          </div>
      </Modal>
      <div
        onClick={() => dispatch(openModal())}
        style={s.navbarItem}>Login</div>
    </div>
  );
};

function getStyle() {
  return {
    container: {
      marginTop: 100,
      textAlign: 'center',
      color: UI.lightWhite,
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
      cursor: 'pointer',
    },
  };
}
Login.displayName = 'Login';

export default connect((state) => ({viewport: state.viewport, isModalOpen: state.modals.isLoginModalOpen}))(Login);

