import {connect} from 'react-redux';
import TodoGenerator from '../components/TodoGenerator';
import {createNewTodo} from '../actions';

const mapDispatchToProps = dispatch => ({
    createNewTodo: (newTodo) => dispatch(createNewTodo(newTodo))
});

const TodoGeneratorContainer = connect(null, mapDispatchToProps)(TodoGenerator);
export default TodoGeneratorContainer;