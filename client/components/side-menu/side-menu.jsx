// Utils
import { connect } from 'react-redux';

// Component
import Item from './item.jsx';
import Login from 'login/login.jsx';

// Actions
import { logout } from 'auth/login.js';


let s = getStyle();

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={s.container}>
        <div style={s.items}>
          <div style={s.group}>
            <Item item={{path: '/', value: 'ReacTogo'}} />
          </div>
          <div style={s.group}>
            <Item item={{path: 'about', value: 'About'}} />
            <Item item={{path: 'fetch-example', value: 'Fetch Example'}} />
            <Item item={{path: 'nested-example', value: 'Nested Example'}} />
          </div>
          <div style={s.group}>
            {this.props.session.get('isLoggedIn') ? <div
              className='light-white cursor'
              style={{padding: 5}}
              onClick={() => this.props.dispatch(logout())}>Logout</div> :
            <Login
              itemStyle={{padding: 5}}/>}
          </div>
        </div>
      </div>
    );
  }
};

SideMenu.displayName = 'SideMenu';

function getStyle() {
  return {
    container: {
      padding: 15,
      backgroundColor: UI.lightGreen,
      height: '100%',
      color: UI.lightWhite,
    },
    group: {
      margin: '20px 0px',
    },
  };
};

export default connect((state) => ({
  viewport: state.get('viewport'),
  session: state.get('session')
}))(SideMenu);
