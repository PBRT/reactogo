// Libs
import { connect } from 'react-redux';

let s = getStyle();

let About = () =>
  (<div style={s.container} className='light-dark'>
    Build by PBRT, check it on&nbsp;
    <a href='http://github.com/PBRT/reactogo' target='_blank'>Github</a>
  </div>);


function getStyle() {
  return {
    container: {
      textAlign: 'center',
      marginTop: 60,
    },
  };
}
About.displayName = 'About';

export default connect((state) => ({viewport: state.get('viewport')}))(About);

