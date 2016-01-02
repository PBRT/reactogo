import { addTodo, setVisibilityFilter, completeTodo, VisibilityFilters } from '../../actions/todos.js';

import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import Footer from './components/Footer.jsx';

// Redux
import { connect } from 'react-redux';

let s = getStyle();

let Todos = (props) => {
  const { dispatch, visibleTodos, visibilityFilter } = props;

  return (
    <div style={s.container}>
      <div style={s.title}>
        Todos Example from <a href='http://rackt.org/redux/index.html' target='_blank'>REDUX Documentation</a>
      </div>
      <AddTodo onAddClick={(text) => dispatch(addTodo(text))}/>
      <Footer filter={visibilityFilter} onFilterChange={filter => dispatch(setVisibilityFilter(filter))} />
      <TodoList todos={visibleTodos} onTodoClick={index => dispatch(completeTodo(index))} />
    </div>
  );
};


function getStyle() {
  return {
    container: {
      marginTop: 60,
      textAlign: 'center',
    },
    title: {
      fontSize: UI.fontXL,
      marginBottom: 20,
    },
  };
}
Todos.displayName = 'Todos';


function selectTodos(todos, filter) {
  return filter === VisibilityFilters.SHOW_ALL ? todos :
    filter === VisibilityFilters.SHOW_COMPLETED ? todos.filter(todo => todo.completed) :
    filter === VisibilityFilters.SHOW_ACTIVE ? todos.filter(todo => !todo.completed) : null;
};

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(select)(Todos);
