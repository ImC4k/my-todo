import {connect} from 'react-redux';
import TodoItemLabelMenu from '../components/TodoItemLabelMenu';
import {setLabelAdderVisibility, addLabel} from '../actions';

const mapStateToProps = state => ({
    targetTodoItem: state.targetTodoItem
});

const mapDispatchToProps = dispatch => ({
    setLabelAdderVisibility: (state)=> dispatch(setLabelAdderVisibility(state)),
    addLabel: (todoItem, label) => dispatch(addLabel(todoItem, label))
});

const TodoItemLabelMenuContainer = connect(mapStateToProps, mapDispatchToProps)(TodoItemLabelMenu);
export default TodoItemLabelMenuContainer;