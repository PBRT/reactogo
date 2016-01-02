import Todo from '../components/Todo.jsx';
let s = getStyle();

let TodoList = (props) => (
  <div style={s.container}>
  {props.todos.length === 0 ? <div>Sorry, nothing to display</div> : props.todos.map((todo, index) =>
    <Todo {...todo}
      key={index}
      onClick={() => props.onTodoClick(index)} />
  )}
  </div>
);



function getStyle() {
  return {
    container: {
      textAlign: 'center',
      margin: 80,
    },
  };
}
TodoList.displayName = 'TodoList';

TodoList.propTypes = {
  onTodoClick: React.PropTypes.func.isRequired,
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  }).isRequired).isRequired
};

export default TodoList;
