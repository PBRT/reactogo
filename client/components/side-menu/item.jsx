// Utils
import { connect } from 'react-redux';
import { Link } from 'react-router';

let s = getStyle();

export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(isHover, event) {
    if ((this.props.isTouchDevice && event === 'touch') ||
      (!this.props.isTouchDevice && event === 'mouse')) {
      if (`/${this.props.path}` !== this.props.item.path) {
        $(this.refs.container).velocity('stop');
        $(this.refs.container).velocity({opacity: isHover ? 1 : 0.8}, {duration: 200});
      }
    }
  }
  render() {
    const linkStyle = Object.assign({}, s.container, {
      opacity: (`/${this.props.path}` === this.props.item.path) ? 1 : 0.8});

    return (<div>
      <Link to={this.props.item.path}>
        <div
          onMouseEnter={() => this.handleHover(true, 'mouse')}
          onMouseLeave={() => this.handleHover(false, 'mouse')}
          onTouchStart={() => this.handleHover(true, 'touch')}
          onTouchEnd={() => this.handleHover(false, 'touch')}
          style={linkStyle}
          ref='container'>
            {this.props.item.value}
        </div>
      </Link>
    </div>);
  }
};

function getStyle() {
  return {
    container: {
      padding: '10px 5px',
      cursor: 'pointer',
      color: UI.lightWhite,
    },
  };
};

Item.displayName = 'ItemSideMenu';

export default connect((state) => ({
  path: state.get('routing').get('locationBeforeTransitions').get('pathname'),
}))(Item);
