import {connect} from 'react-redux';
import LabelAdder from '../components/LabelAdder';
import {setLabelAdderVisibility} from '../actions';

const mapStateToProps = state => ({
    labelAdderVisibility: state.labelAdderVisibility
});

const mapDispatchToProps = dispatch => ({
    setLabelAdderVisibility: (state)=> dispatch(setLabelAdderVisibility(state)),
});

const LabelAdderContainer = connect(mapStateToProps, mapDispatchToProps)(LabelAdder);
export default LabelAdderContainer;