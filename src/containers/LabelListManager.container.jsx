import { connect } from 'react-redux';
import LabelListManager from '../components/LabelListManager';
import { setLabelAdderVisibility } from '../actions';

const mapStateToProps = state => ({
    labelList: state.labels
});

const mapDispatchToProps = dispatch => ({
    setLabelAdderVisibility: (state) => dispatch(setLabelAdderVisibility(state)),
});

const LabelListManagerContainer = connect(mapStateToProps, mapDispatchToProps)(LabelListManager);
export default LabelListManagerContainer;