// Libs
import { connect } from 'react-redux';

let s = getStyle();

let About = () =>
  (<div style={s.container}>
    Build by PBRT, check it on&nbsp;
    <a href='http://github.com/PBRT/reactogo' target='_blank'>Github</a>
  </div>);


function getStyle() {
  return {
    container: {
      marginTop: 100,
      textAlign: 'center',
      color: UI.lightDark,
    },
  };
}
About.displayName = 'About';

export default connect((state) => ({viewport: state.get('viewport')}))(About);

