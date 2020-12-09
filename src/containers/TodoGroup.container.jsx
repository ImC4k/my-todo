import {connect} from 'react-redux';
import TodoGroup from '../components/TodoGroup';
import {setTodoList} from '../actions';

const mapStateToProps = state => ({
    todoList: state.todoList.filter(todoItem => !todoItem.done)
});

const mapDispatchToProps = dispatch => ({
    setTodoList: (todoList) => dispatch(setTodoList(todoList))
});

const TodoGroupContainer = connect(mapStateToProps, mapDispatchToProps)(TodoGroup);
export default TodoGroupContainer;