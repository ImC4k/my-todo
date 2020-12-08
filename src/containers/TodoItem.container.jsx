import {connect} from 'react-redux';
import {markTodoDone, markTodoNotDone, deleteTodo} from '../actions';
import TodoItem from '../components/TodoItem';

const mapDispatchToProps = dispatch => ({
    markTodoDone: (uuid) => dispatch(markTodoDone(uuid)),
    markTodoNotDone: (uuid) => dispatch(markTodoNotDone(uuid)),
    deleteTodo: (uuid) => dispatch(deleteTodo(uuid))
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);
export default TodoItemContainer;