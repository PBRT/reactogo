import { connect } from 'react-redux';

import ButtonMotion from 'button-motion.jsx';
import ButtonVelocity from 'button-velocity.jsx';
import { handleStyle } from 'style.js';

let s = getStyle();

let Home = () =>
  (<div style={s.container}>
    <div className='text-center title' style={handleStyle(s.title)}>reacToGO</div>
    <div className='text-center subtitle'>
      Including webpack, react, react-router, velocity, reactmotion, bootstrap, stylus
    </div>
    <div className='row no-padding' style={s.row}>
      <div className='col-xs-3 col-xs-offset-3 no-padding'>
        React Motion animation
          <ButtonMotion />
      </div>
      <div className='col-xs-3 no-margin'>
        Velocity JS animation
        <ButtonVelocity />
      </div>
    </div>
  </div>);


function getStyle() {
  return {
    container: {
      marginTop: 100,
      textAlign: 'center',
    },
    row: {
      marginTop: 60,
    },
    title: {
      color: 'red',
      tablet: {
        color: 'blue',
      },
      desktop: {
        color: 'green',
      },
    },
  };
}
Home.displayName = 'Home';

export default connect((state) => ({viewport: state.viewport}))(Home);
