let s = getStyle();

let Todo = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={s.container}>
        <div style={props.completed ? s.completed : s.uncompleted}>{props.text}</div>
    </div>
  );
};


function getStyle() {
  return {
    container: {
      textAlign: 'center',
      border: '1px solid',
      margin: 10,
    },
    completed: {
      padding: 20,
      textDecoration: 'line-through',
      cursor: 'default',
    },
    uncompleted: {
      padding: 20,
      textDecoration: 'none',
      cursor: 'pointer',
    },
  };
}
Todo.displayName = 'Todo';

Todo.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired
};

export default Todo;
