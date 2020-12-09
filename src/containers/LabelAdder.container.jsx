import {connect} from 'react-redux';
import LabelAdder from '../components/LabelAdder';
import {setLabelAdderVisibility, createLabel, addLabel} from '../actions';

const mapStateToProps = state => ({
    labelAdderVisibility: state.labelAdderVisibility,
    targetTodoItem: state.targetTodoItem
});

const mapDispatchToProps = dispatch => ({
    setLabelAdderVisibility: (state) => dispatch(setLabelAdderVisibility(state)),
    createNewLabel: (label) => dispatch(createLabel(label)),
    addLabel: (todoItem, label) => dispatch(addLabel(todoItem, label))
});

const LabelAdderContainer = connect(mapStateToProps, mapDispatchToProps)(LabelAdder);
export default LabelAdderContainer;