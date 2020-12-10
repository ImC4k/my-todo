import {connect} from 'react-redux';
import {updateTodoItem, deleteTodo, setTargetTodoItemId} from '../../actions';
import TodoItem from './TodoItem';

const mapDispatchToProps = dispatch => ({
    updateTodoItem: (todoItem) => dispatch(updateTodoItem(todoItem)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    setTargetTodoItemId: (todoItem) => dispatch(setTargetTodoItemId(todoItem))
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);
export default TodoItemContainer;