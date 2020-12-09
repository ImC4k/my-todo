import {connect} from 'react-redux';
import {setTodoList, setLabelList} from '../actions';
import App from '../App';

const mapDispatchToProps = dispatch => ({
    setTodoList: (todoList) => dispatch(setTodoList(todoList)),
    setLabelList: (labelList) => dispatch(setLabelList(labelList))
});

const AppContainer = connect(null, mapDispatchToProps)(App);
export default AppContainer;