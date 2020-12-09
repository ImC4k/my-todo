import {connect} from 'react-redux';
import LabelItem from '../components/LabelItem';
import {deleteLabel, setTodoList} from '../actions';

const mapDispatchToProps = dispatch => ({
    deleteLabel: (label) => dispatch(deleteLabel(label)),
    setTodoList: (todoList) => dispatch(setTodoList(todoList))
});

const LabelItemContainer = connect(null, mapDispatchToProps)(LabelItem);
export default LabelItemContainer;