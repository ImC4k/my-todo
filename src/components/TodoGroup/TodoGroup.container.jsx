import {connect} from 'react-redux';
import TodoGroup from '.';

const mapStateToProps = state => ({
    todoList: state.todoList.filter(todoItem => !todoItem.done)
});

const TodoGroupContainer = connect(mapStateToProps)(TodoGroup);
export default TodoGroupContainer;