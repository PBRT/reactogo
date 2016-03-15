// Libs
import ReactDOM from 'react-dom';

// Utils
import { handleStyle } from 'style.js';

let s = getStyle();

// Main class - App
export default class ButtonVelocity extends React.Component {
  constructor() {
    super();
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(active) {
    $(ReactDOM.findDOMNode(this)).velocity('stop');
    $(ReactDOM.findDOMNode(this)).velocity({
      scale: active ? 1.4 : 1,
      opacity: active ? 0.7 : 1}, {duration: 400, easing: 'easeIn'});
  }
  render() {
    return (
      <div
        onMouseEnter={this.handleHover.bind(null, true)}
        onMouseLeave={this.handleHover.bind(null, false)}
        style={handleStyle(s.container)}>
        <a href='http://github.com/pbrt/reactogo' target='_blank' style={handleStyle(s.button)}>Check source code</a>
      </div>
    );
  }
}

function getStyle() {
  return {
    container: {
      marginTop: 20,
      tablet: {
        marginTop: 30,
      },
      desktop: {
        marginTop: 30,
      },
    },
    button: {
      textAlign: 'center',
      backgroundColor: '#e74c3c',
      padding: '10px 20px',
      borderRadius: 3,
      cursor: 'pointer',
      color: 'white',
      display: 'inline-block',
      textDecoration: 'none',
      fontSize: 12,
      tablet: {
        padding: '20px 30px',
        fontSize: 14,
      },
      desktop: {
        padding: '20px 30px',
        fontSize: 16,
      },
    },
    row: {
      marginTop: 70,
    },
  };
}
