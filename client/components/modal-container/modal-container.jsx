// Utils
import Modal from 'react-modal';
import { handleStyle } from 'style.js';

let s = getStyle();

const modalStyle = {
  overlay: {
    backgroundColor: 'none',
    overflow: 'hidden',
  },
  content: {
    backgroundColor: UI.lightGreen,
    border: 'none',
    borderRadius: 0,
    top: 0,
    left: 0,
    right: 0,
    overflow: 'visible',
    height: '100%',
    bottom: 'initial',
    padding: 20,
    position: 'absolute',
    tablet: {
      top: 'initial',
      left: 'initial',
      right: 'initial',
      padding: 40,
      maxWidth: 500,
      height: 'initial',
      borderRadius: 4,
      position: 'relative',
    },
  },
};

let ModalContainer = (props) => {
  const style = Object.assign({}, {overlay: modalStyle.overlay}, {content: handleStyle(modalStyle.content)});

  return <Modal
    style={style}
    closeTimeoutMS={150}
    onRequestClose={() => props.closeModal()}
    isOpen={props.isModalOpen}>
    <div style={s.container}>
      <i style={handleStyle(s.close)} className='icon-cross light-white' onClick={() => props.closeModal()}/>
      {props.children}
    </div>
  </Modal>;
};

function getStyle() {
  return {
    container: {
    },
    close: {
      top: 20,
      right: 20,
      position: 'absolute',
      width: 14,
      cursor: 'pointer',
      tablet: {
        right: 0,
        top: -25,
      },
    },
  };
}
ModalContainer.displayName = 'ModalContainer';

ModalContainer.propTypes = {
  closeModal: React.PropTypes.func,
  isModalOpen: React.PropTypes.bool,
};

export default ModalContainer;
