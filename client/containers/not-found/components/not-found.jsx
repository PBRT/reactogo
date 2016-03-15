// Libs
import { connect } from 'react-redux';

let s = getStyle();

let NotFound = () =>
  (<div style={s.container} className='text-center'>
    Page not found
  </div>);


function getStyle() {
  return {
    container: {
    },
  };
}
NotFound.displayName = 'NotFound';

export default connect((state) => ({viewport: state.get('viewport')}))(NotFound);
