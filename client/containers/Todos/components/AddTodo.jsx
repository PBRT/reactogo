let s = getStyle();

export default class AddTodo extends React.Component {
  render() {
    const handleClick  = () => {
      this.props.onAddClick(this.refs.input.value.trim());
      this.refs.input.value = '';
    };

    return (
      <div>
        <input type='text' ref='input' style={s.input}/>
        <div onClick={() => handleClick()} style={s.button}>Add Todo</div>
      </div>
    );
  }
};

function getStyle() {
  return {
    container: {
      marginTop: 100,
      textAlign: 'center',
    },
    button: {
      cursor: 'pointer',
      padding: 10,
      display: 'inline-block',
      verticalAlign: 'middle',
      color: UI.lightWhite,
      backgroundColor: UI.lightDark,
      borderRadius: 2,
    },
    input: {
      fontSize: UI.fontXL,
      height: 40,
      padding: 10,
      borderRadius: 2,
      WebkitAppearance: 'none',
      border: '1px solid rgb(227, 227, 227)',
      outline: 'none',
      verticalAlign: 'middle',
      display: 'inline-block',
    },
  };
}
AddTodo.displayName = 'AddTodo';
AddTodo.propTypes = {
  onAddClick: React.PropTypes.func.isRequired
};


