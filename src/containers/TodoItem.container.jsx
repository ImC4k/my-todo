import {connect} from 'react-redux';
import {updateTodoItem, deleteTodo} from '../actions';
import TodoItem from '../components/TodoItem';

const mapDispatchToProps = dispatch => ({
    updateTodoItem: (todoItem) => dispatch(updateTodoItem(todoItem)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);
export default TodoItemContainer;