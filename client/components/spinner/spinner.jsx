import { path, pathMobile } from './path.js';
import { connect } from 'react-redux';

let Spinner = (props) => {
  return (
    <div style={{textAlign: 'center'}}>
      {props.viewport.get('isMobile') ?
        <svg width='90' height='50' viewBox='0 0 90 50'>
          <path
            transform='translate(5, 5)'
            className='spinner-path'
            fill='#ffffff'
            stroke='#27ae60'
            strokeWidth='2'
            d={pathMobile}
            id='Shape'></path>
        </svg> :
        <svg width='360' height='65' viewBox='0 0 360 65'>
          <path
            transform='translate(5, 5)'
            className='spinner-path'
            fill='#ffffff'
            stroke='#27ae60'
            strokeWidth='2'
            d={path}
            id='Shape'></path>
        </svg>}
    </div>
  );
};

Spinner.displayName = 'Spinner';


export default connect((state) => ({
  viewport: state.get('viewport'),
}))(Spinner);
