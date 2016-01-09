import { connect } from 'react-redux';

let s = getStyle();

let Contact = () =>
  (<div style={s.container}>
    Contact
    <div><a href='http://pbrt.co' target='_blank'>Check my website</a></div>
    <div><a href='http://github.com/pbrt' target='_blank'>Check my github</a></div>
  </div>);


function getStyle() {
  return {
    container: {
      marginTop: 100,
      textAlign: 'center',
    },
  };
}
Contact.displayName = 'Contact';

export default connect((state) => ({viewport: state.viewport}))(Contact);
