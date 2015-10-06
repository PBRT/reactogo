var s = getStyle();

// Main class - App
export default class ButtonVelocity extends React.Component {
  constructor() {
    super();
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(active) {
    $(React.findDOMNode(this)).velocity({
      scale: active ? 1.4 : 1,
      opacity: active ? 0.7 : 1}, {duration: 400, easing: 'easeIn'});
  }
  render() {
    return (
      <div
        onMouseEnter={this.handleHover.bind(null, true)}
        onMouseLeave={this.handleHover.bind(null, false)}
        style={this.context.s(s.container)}>
        <a href='http://github.com' target='_blank' style={this.context.s(s.button)}>Check source code</a>
      </div>
    );
  }
}

function getStyle() {
  return {
    container: {
      marginTop: 20,
      tablet: {
        marginTop: 30,
      },
      desktop: {
        marginTop: 30,
      },
    },
    button: {
      textAlign: 'center',
      backgroundColor: '#e74c3c',
      padding: '10px 20px',
      borderRadius: 3,
      cursor: 'pointer',
      color: 'white',
      display: 'inline-block',
      textDecoration: 'none',
      fontSize: 12,
      tablet: {
        padding: '20px 30px',
        fontSize: 14,
      },
      desktop: {
        padding: '20px 30px',
        fontSize: 16,
      },
    },
    row: {
      marginTop: 70,
    },
  };
}

ButtonVelocity.contextTypes = {
  s: React.PropTypes.func.isRequired,
};
