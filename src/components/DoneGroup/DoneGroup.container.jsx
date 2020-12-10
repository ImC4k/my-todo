import {connect} from 'react-redux';
import DoneGroup from '.';

const mapStateToProps = state => ({
    todoList: state.todoList.filter(todoItem => todoItem.done)
});

const DoneGroupContainer = connect(mapStateToProps)(DoneGroup);
export default DoneGroupContainer;