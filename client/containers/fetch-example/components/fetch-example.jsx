// Libs
import { connect } from 'react-redux';

// Actions
import { fetchData } from 'fetch.js';

// Components
import Spinner from 'spinner/spinner.jsx';

let s = getStyle();

class FetchExample extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return <div className='text-center' style={s.container}>
      <h1 style={s.title}>Stupid API call to JSON Placeholder</h1>
      <h2>Click on the button for fetching data from OPEN JSON API. A delay of 3s is set for seeing the spinner!</h2>
      <div
        style={s.cta}
        onClick={() => this.props.dispatch(fetchData())}
        className='button button-primary'>
        Fetch Data
      </div>
      {this.props.fetchedData.get('isLoading') ? <Spinner /> :
      !this.props.fetchedData.get('data').isEmpty() ?
      <h3 style={s.data}>
        {JSON.stringify(this.props.fetchedData.get('data').toJS())}
      </h3> : ''}
    </div>;
  }
}

FetchExample.displayName = 'FetchExample';

function getStyle() {
  return {
    title: {
      marginBottom: 30,
    },
    container: {
      marginTop: 60,
    },
    cta: {
      marginTop: 50,
      marginBottom: 30,
    },
    data: {
      padding: 20,
      wordBreak: 'break-all',
    },
  };
}

export default connect((state) => ({fetchedData: state.get('fetchedData')}))(FetchExample);

