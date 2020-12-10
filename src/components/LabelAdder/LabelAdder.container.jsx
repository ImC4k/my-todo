import {connect} from 'react-redux';
import LabelAdder from '.';
import {setIsLabelAdderVisible, createLabel} from '../../actions';

const mapStateToProps = state => ({
    labelAdderVisibility: state.labelAdderVisibility,
    targetTodoItemId: state.targetTodoItemId
});

const mapDispatchToProps = dispatch => ({
    setLabelAdderVisibility: (state) => dispatch(setIsLabelAdderVisible(state)),
    createNewLabel: (label) => dispatch(createLabel(label))
});

const LabelAdderContainer = connect(mapStateToProps, mapDispatchToProps)(LabelAdder);
export default LabelAdderContainer;