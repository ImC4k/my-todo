import TodoList from './components/TodoList';
import DoneGroupContainer from './containers/DoneGroup.container';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  const routes = [
    {
      name: 'root page',
      path: '/',
      description: 'home',
      element: 
      (<div>
        <h1>
          Home
        </h1>
      </div>)
    },
    {
      name: 'list page',
      path: '/todo',
      description: 'go to list page',
      element: <TodoList />
    },
    {
      name: 'done page',
      path: '/done',
      description: 'go to done page',
      element: <DoneGroupContainer />
    },
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
