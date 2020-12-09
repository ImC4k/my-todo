import {connect} from 'react-redux';
import TodoGroup from '../components/TodoGroup';
import {setTodoList, setLabelList} from '../actions';

const mapStateToProps = state => ({
    todoList: state.todoList.filter(todoItem => !todoItem.done)
});

const mapDispatchToProps = dispatch => ({
    setTodoList: (todoList) => dispatch(setTodoList(todoList)),
    setLabelList: (labelList) => dispatch(setLabelList(labelList))
});

const TodoGroupContainer = connect(mapStateToProps, mapDispatchToProps)(TodoGroup);
export default TodoGroupContainer;