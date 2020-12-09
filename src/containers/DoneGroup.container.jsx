import {connect} from 'react-redux';
import TodoGroup from '../components/TodoGroup';

const mapStateToProps = state => ({
    todoList: state.todoList.filter(todoItem => todoItem.done)
});

const DoneGroupContainer = connect(mapStateToProps)(TodoGroup);
export default DoneGroupContainer;