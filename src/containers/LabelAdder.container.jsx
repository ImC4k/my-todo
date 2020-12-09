import {connect} from 'react-redux';
import LabelAdder from '../components/LabelAdder';
import {setLabelAdderVisibility, addLabel} from '../actions';

const mapStateToProps = state => ({
    labelAdderVisibility: state.labelAdderVisibility,
    targetTodoItem: state.targetTodoItem
});

const mapDispatchToProps = dispatch => ({
    setLabelAdderVisibility: (state) => dispatch(setLabelAdderVisibility(state)),
    addLabel: (todoItem, label) => dispatch(addLabel(todoItem, label))
});

const LabelAdderContainer = connect(mapStateToProps, mapDispatchToProps)(LabelAdder);
export default LabelAdderContainer;