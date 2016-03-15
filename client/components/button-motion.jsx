// Libs
import {spring, Motion} from 'react-motion';

// Utils
import { handleStyle } from 'style.js';

var s = getStyle();

// Main class - App
export default class ButtonMotion extends React.Component {
  constructor() {
    super();
    this.state = {isHover: false};
    this.handleHover = this.handleHover.bind(this);
    this.getSpringProps = this.getSpringProps.bind(this);
  }
  handleHover(active) {this.setState({isHover: active}); }
  getSpringProps() {
    return {
      defaultStyle: {
        opacity: 1,
        scale: 1,
      },
      style:{
        opacity: spring(this.state.isHover ? 0.6 : 1),
        scale: spring(this.state.isHover ? 1.4 : 1),
      },
    };
  }
  render() {
    return (
      <Motion {...this.getSpringProps()}>
        {interpolatedStyle => {
          return (
            <div
              onMouseEnter={this.handleHover.bind(null, true)}
              onMouseLeave={this.handleHover.bind(null, false)}
              style={_.extend(handleStyle(s.container), {opacity: interpolatedStyle.opacity})}>
              <a href='http://github.com/pbrt/reactogo' target='_blank' style={_.extend(handleStyle(s.button), {
                transform: 'scale(' + interpolatedStyle.scale + ')',
              })}>Check source code</a>
            </div>
          );
        }}
      </Motion>
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

ButtonMotion.displayName = 'ButtonMotion';

