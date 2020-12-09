import TodoList from './components/TodoList';
import './App.css';
import DoneGroupContainer from './containers/DoneGroup.container';
import NotFound from './components/NotFound';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function App() {
  const routes = [
    {
      name: 'root page',
      path: '/',
      description: 'home',
      element: <div />
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
        <ul>
          {
            routes.map(route => 
              <li key={route.name}>
                <Link to={route.path}>
                  {route.description}
                </Link>
              </li>
            )
          }
        </ul>
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
