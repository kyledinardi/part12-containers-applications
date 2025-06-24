import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos
        .map((todo) => (
          <Todo
            key={todo._id}
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))
        .reduce((acc, cur, i) => [...acc, <hr key={i} />, cur], [])}
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  completeTodo: PropTypes.func,
};

export default TodoList;
