// Libs
import { connect } from 'react-redux';

// Components
import ButtonMotion from 'button-motion.jsx';
import ButtonVelocity from 'button-velocity.jsx';

let s = getStyle();

let Home = () =>
  (<div style={s.container}>
    <h1 className='text-center light-blue' style={s.title}>reacToGO</h1>
    <h2 className='text-center'>
      Including webpack, react, react-router, ImmutableJS, redux, velocity, reactmotion, bootstrap, stylus
    </h2>
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
      marginBottom: 40,
    },
  };
}
Home.displayName = 'Home';

export default connect((state) => ({viewport: state.get('viewport')}))(Home);
