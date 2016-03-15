import { path } from './path.js';

let Spinner = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <svg width="100" height="70" viewBox="0 0 200 200">
        <path
          className="spinner-path"
          fill="#ffffff"
          stroke="#18856C"
          strokeWidth="3"
          d={path}
          id="Shape"></path>
      </svg>
    </div>
  );
};

Spinner.displayName = 'Spinner';

export default Spinner;
