import {connect} from 'react-redux';
import LabelAdder from '../components/LabelAdder';
import {setIsLabelAdderVisible, createLabel, addLabel} from '../actions';

const mapStateToProps = state => ({
    labelAdderVisibility: state.labelAdderVisibility,
    targetTodoItemId: state.targetTodoItemId
});

const mapDispatchToProps = dispatch => ({
    setLabelAdderVisibility: (state) => dispatch(setIsLabelAdderVisible(state)),
    createNewLabel: (label) => dispatch(createLabel(label)),
    addLabel: (todoItem, label) => dispatch(addLabel(todoItem, label))
});

const LabelAdderContainer = connect(mapStateToProps, mapDispatchToProps)(LabelAdder);
export default LabelAdderContainer;