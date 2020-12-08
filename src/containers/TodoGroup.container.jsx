import {connect} from 'react-redux';
import TodoGroup from '../components/TodoGroup';

const mapStateToProps = state => ({
    todoList: state.todoList
});

const TodoGroupContainer = connect(mapStateToProps)(TodoGroup);
export default TodoGroupContainer;