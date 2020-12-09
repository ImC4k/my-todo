import {connect} from 'react-redux';
import {toggleTodoDone, deleteTodo} from '../actions';
import TodoItem from '../components/TodoItem';

const mapDispatchToProps = dispatch => ({
    toggleTodoDone: (uuid) => dispatch(toggleTodoDone(uuid)),
    deleteTodo: (uuid) => dispatch(deleteTodo(uuid))
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);
export default TodoItemContainer;