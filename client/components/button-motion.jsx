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
        scale: 1,
      },
      style:{
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
              style={handleStyle(s.container)}>
              <a
                href='http://github.com/pbrt/reactogo'
                target='_blank'
                className='button button-info'
                style={{transform: 'scale(' + interpolatedStyle.scale + ')'}}>
                  <span className='light-white'>Check source code</span>
              </a>
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
    row: {
      marginTop: 70,
    },
  };
}

ButtonMotion.displayName = 'ButtonMotion';

