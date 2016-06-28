// Libs
import { connect } from 'react-redux';

// Components
import ButtonMotion from 'button-motion.jsx';
import ButtonVelocity from 'button-velocity.jsx';
import Spinner from 'spinner/spinner.jsx';

let s = getStyle();

let Home = () =>
  (<div style={s.container}>
    <Spinner />
    <h2 className='text-center' style={s.subtitle}>
      Including Webpack, React, React-Router, ImmutableJS, Redux, VelocityJS,
       React Motion, Stylus, Karma, Fetch API Polyfill
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
    subtitle: {
      marginBottom: 60,
      marginTop: 60,
    },
  };
}

Home.displayName = 'Home';

export default connect((state) => ({viewport: state.get('viewport')}))(Home);
