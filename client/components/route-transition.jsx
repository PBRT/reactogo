import { PropTypes } from 'react';
import { TransitionMotion, spring } from 'react-motion';

export default class RouteTransition extends React.Component {
  constructor() {
    super();
    this.willEnter = this.willEnter.bind(this);
    this.willLeave = this.willLeave.bind(this);
  }
  willEnter() {
    return {
      handler: this.props.children,
      opacity: spring(0),
      position: spring(30)
    };
  }
  willLeave(key, value) {
    return {
      handler: value.handler,
      opacity: spring(0),
      position: spring(30)
    };
  }
  getStyles() {
    const { children, pathname } = this.props;
    return {
      [pathname]: {
        handler: children,
        opacity: spring(1),
        position: spring(1)
      }
    };
  }
  render() {
    return (
      <TransitionMotion
        styles={this.getStyles()}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
      >
        {interpolated =>
          <div>
            {Object.keys(interpolated).map(key =>
              <div
                key={`${key}-transition`}
                style={{
                  width: '100%',
                  position: 'absolute',
                  opacity: interpolated[key].opacity,
                  transform: `translate3d(0px, ${interpolated[key].position}px, 0px)`
                }}
              >
               {interpolated[key].handler}
              </div>
            )}
          </div>
        }
      </TransitionMotion>
    );
  }
};

RouteTransition.propTypes = {
  pathname: PropTypes.string.isRequired,
};

RouteTransition.displayName = 'RouteTransition';
