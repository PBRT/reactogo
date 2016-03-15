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
    $(ReactDOM.findDOMNode(this)).velocity({scale: active ? 1.4 : 1}, {duration: 200, easing: 'easeIn'});
  }
  render() {
    return (
      <div
        onMouseEnter={this.handleHover.bind(null, true)}
        onMouseLeave={this.handleHover.bind(null, false)}
        style={handleStyle(s.container)}>
        <a
          href='http://github.com/pbrt/reactogo'
          target='_blank'
          className='button button-info'>
            <span className='light-white'>Check source code</span>
        </a>
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
    row: {
      marginTop: 70,
    },
  };
}
