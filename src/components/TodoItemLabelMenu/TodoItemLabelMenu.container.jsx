import { connect } from 'react-redux';
import TodoItemLabelMenu from '.';
import { addLabel, removeLabel } from '../../actions';

const mapStateToProps = state => ({
    targetTodoItemId: state.targetTodoItemId,
    todoList: state.todoList,
    labels: state.labels
});

const mapDispatchToProps = dispatch => ({
    addLabel: (todoItemId, label) => dispatch(addLabel(todoItemId, label)),
    removeLabel: (todoItemId, label) => dispatch(removeLabel(todoItemId, label)),
});

const TodoItemLabelMenuContainer = connect(mapStateToProps, mapDispatchToProps)(TodoItemLabelMenu);
export default TodoItemLabelMenuContainer;