import { connect } from 'react-redux';
import LabelListManager from '.';
import { setIsLabelAdderVisible } from '../../actions';

const mapStateToProps = state => ({
    labelList: state.labels
});

const mapDispatchToProps = dispatch => ({
    setIsLabelAdderVisible: (state) => dispatch(setIsLabelAdderVisible(state)),
});

const LabelListManagerContainer = connect(mapStateToProps, mapDispatchToProps)(LabelListManager);
export default LabelListManagerContainer;