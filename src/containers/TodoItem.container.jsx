import {connect} from 'react-redux';
import {toggleTodoDone, deleteTodo} from '../actions';
import TodoItem from '../components/TodoItem';

const mapDispatchToProps = dispatch => ({
    toggleTodoDone: (id) => dispatch(toggleTodoDone(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);
export default TodoItemContainer;