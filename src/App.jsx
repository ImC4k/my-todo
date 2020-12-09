import TodoList from './components/TodoList';
import DoneGroupContainer from './containers/DoneGroup.container';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import LabelListManagerContainer from './containers/LabelListManager.container';

function App() {
  const routes = [
    {
      name: 'root page',
      path: '/',
      description: 'Home',
      element: <Home />
    },
    {
      name: 'list page',
      path: '/todo',
      description: 'Todos',
      element: <TodoList />
    },
    {
      name: 'done page',
      path: '/done',
      description: 'Done',
      element: <DoneGroupContainer />
    },
    {
      name: 'manage labels page',
      path: '/manage-labels',
      description: 'Manage Labels',
      element: <LabelListManagerContainer />
    }
  ];
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation routes={routes} />
        <Switch>
          {
            routes.map(route => 
              <Route key={route.name} path={route.path} exact >
                {route.element}
              </Route>
            )
          }
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
