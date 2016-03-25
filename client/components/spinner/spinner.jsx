import { path } from './path.js';

let Spinner = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <svg width='360' height='65' viewBox='0 0 360 65'>
        <path
          transform='translate(5, 5)'
          className='spinner-path'
          fill='#ffffff'
          stroke='#27ae60'
          strokeWidth='2'
          d={path}
          id='Shape'></path>
      </svg>
    </div>
  );
};

Spinner.displayName = 'Spinner';

export default Spinner;
