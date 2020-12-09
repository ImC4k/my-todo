import {connect} from 'react-redux';
import TodoItemLabelMenu from '../components/TodoItemLabelMenu';
import {setLabelAdderVisibility} from '../actions';

const mapDispatchToProps = dispatch => ({
    setLabelAdderVisibility: (state)=> dispatch(setLabelAdderVisibility(state)),
});

const TodoItemLabelMenuContainer = connect(null, mapDispatchToProps)(TodoItemLabelMenu);
export default TodoItemLabelMenuContainer;