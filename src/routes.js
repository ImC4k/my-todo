import Home from './components/Home';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import LabelListManagerContainer from './components/LabelListManager/LabelListManager.container';

const routes = [
    {
      name: 'root page',
      path: '/',
      description: 'Home',
      component: Home
    },
    {
      name: 'list page',
      path: '/todo',
      description: 'Todos',
      component: TodoList
    },
    {
      name: 'done page',
      path: '/done',
      description: 'Done',
      component: DoneList
    },
    {
      name: 'manage labels page',
      path: '/manage-labels',
      description: 'Manage Labels',
      component: LabelListManagerContainer
    }
  ];

  export default routes;