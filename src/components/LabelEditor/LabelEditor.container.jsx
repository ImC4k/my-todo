import {connect} from 'react-redux';
import {addLabel, updateLabel, setTodoList} from '../../actions';
import LabelEditor from '.';

const mapStateToProps = state => ({
    targetTodoItemId: state.targetTodoItemId
});

const mapDispatchToProps = dispatch => ({
    updateLabel: (label) => dispatch(updateLabel(label)),
    addLabel: (todoItem, label) => dispatch(addLabel(todoItem, label)),
    setTodoList: (todoList) => dispatch(setTodoList(todoList))
});

const LabelEditorContainer = connect(mapStateToProps, mapDispatchToProps)(LabelEditor);
export default LabelEditorContainer;