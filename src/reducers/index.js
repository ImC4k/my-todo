import { combineReducers } from 'redux';
import todoList from './todoList.reducer';
import labelAdderVisibility from './labelAdderVisibility.reducer';
import labels from './labels.reducer';
import targetTodoItemId from './targetTodoItemId.reducer';

export default combineReducers({
    todoList,
    labelAdderVisibility,
    labels,
    targetTodoItemId
});