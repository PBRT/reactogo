// Libs
import { connect } from 'react-redux';

// Components
import ButtonMotion from 'button-motion.jsx';
import ButtonVelocity from 'button-velocity.jsx';

let s = getStyle();

let Home = () =>
  (<div style={s.container}>
    <h1 className='text-center light-blue' style={s.title}>reacToGO</h1>
    <h2 className='text-center' style={s.subtitle}>
      Including webpack, react, react-router, ImmutableJS, redux, velocity, reactmotion, bootstrap, stylus, Fetch API
    </h2>
    <div className='flex text-center' style={s.row}>
      <div className='flex-1'>
        React Motion
        <ButtonMotion />
      </div>
      <div className='flex-1'>
        Velocity JS
        <ButtonVelocity />
      </div>
    </div>
    <h2>Fork the project and run npm install</h2>
  </div>);


function getStyle() {
  return {
    container: {
      textAlign: 'center',
      marginTop: 40,
      padding: 20,
    },
    row: {
      maxWidth: 600,
      margin: 'auto',
      marginBottom: 60,
    },
    title: {
      marginBottom: 40,
    },
    subtitle: {
      marginBottom: 60,
    },
  };
}
Home.displayName = 'Home';

export default connect((state) => ({viewport: state.get('viewport')}))(Home);
