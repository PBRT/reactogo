let s = getStyle();

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/', {
      method: 'get',
    })
    .then(res => res.json())
    .then(res => {
      console.log('API Response', res);
    });
  }
  render() {
    return <div className='text-center' style={s.container}>
      <h1 style={s.title}>Stupid API call to JSON Placeholder</h1>
      <h2>Check the console for see the response</h2>
    </div>;
  }
}

function getStyle() {
  return {
    title: {
      marginBottom: 30,
    },
    container: {
      marginTop: 60,
    },
  };
}
