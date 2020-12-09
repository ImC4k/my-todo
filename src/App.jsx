import TodoList from './components/TodoList';
import './App.css';
import DoneListContainer from './containers/DoneList.container';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';

function App() {
  const routes = [
    {
      name: 'root page',
      path: '/',
      description: 'empty',
      element: (<div />)
    },
    {
      name: 'list page',
      path: '/todo',
      description: 'go to list page',
      element: (<TodoList />)
    },
    {
      name: 'done page',
      path: '/done',
      description: 'go to done page',
      element: (<DoneListContainer />)
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
          {/* {
            routes.map(route => 
              <Route key={route.name} path={route.path} >
                {route.element}
              </Route>
            )
          } */}
          <Route path='/todo' >
            <TodoList />
          </Route>
          <Route path='/done' >
            <DoneListContainer />
          </Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
