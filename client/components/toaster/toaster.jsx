// Utils
import { connect } from 'react-redux';

// Actions
import { removeMessage } from 'toaster.js';

let s = getStyle();

// Diff between lists
const tabDiff = (tab1, tab2) => tab1.filter((current) =>
  tab2.filter((current_b) => current_b.id === current.id).length === 0);

// Get Toast style
const getToastStyle = (type) =>  Object.assign({}, s.item, {backgroundColor:
  type === 'success' ? UI.lightGreen :
  type === 'error' ? UI.lightRed :
  type === 'info' ? UI.lightYellow : UI.lightGreen
});

class Toaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: this.props.list};
  }
  componentWillReceiveProps(nextProps) {
    // Update Local state
    if (nextProps.list.length > this.props.list.length) {
      this.setState({list: nextProps.list});
    }
  }
  componentDidUpdate(prevProps) {
    // Message deleted
    if (prevProps.list.length > this.props.list.length) {
      $(this.refs[`item-${tabDiff(prevProps.list, this.props.list)[0].id}`]).velocity(
        {opacity: 0, translateY: -30}, {duration: 200, complete: function() {
          this.setState({list: this.props.list});
        }.bind(this)
      });
    } else if (prevProps.list.length < this.props.list.length) {
      const newMessage = $(this.refs[`item-${tabDiff(this.props.list, prevProps.list)[0].id}`]);
      newMessage.velocity({translateY: -30}, {duration: 0, complete: function() {
        newMessage.velocity({opacity: 1,translateY: 0}, 200);
      }.bind(this),
      });
    }
  }
  render() {

    return <div style={s.container}>
      {this.state.list.map(item =>
        <div key={item.id} style={getToastStyle(item.type)} ref={`item-${item.id}`}>
          {item.text}
          <i
            onClick={() => this.props.dispatch(removeMessage(item.id))}
            className='icon-cross-circle font-lg cursor'
            style={s.icon}></i>
        </div>)}
    </div>;
  }
}

function getStyle() {
  return {
    container: {
      position: 'fixed',
      top: 70,
      left: 20,
      right: 20,
      zIndex: 9999,
    },
    item: {
      backgroundColor: UI.lightGreen,
      color: UI.lightWhite,
      textAlign: 'left',
      marginBottom: 20,
      opacity: 0,
      padding: 15,
      borderRadius: 3,
      position: 'relative'
    },
    icon: {
      position: 'absolute',
      right: 30,
    },
  };
};

export default connect((state) => ({
  list: state.get('toasters').toJS(),
}))(Toaster);
