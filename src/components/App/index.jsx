import TodoList from '../TodoList';
import DoneGroupContainer from '../DoneGroup/DoneGroup.container';
import NotFound from '../NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import Home from '../Home';
import LabelListManagerContainer from '../LabelListManager/LabelListManager.container';
import React, {Component} from 'react';

import { getTodoList } from '../../api/todoList.service';
import { getLabels } from '../../api/labels.service';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes : [
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
      ]
    }
  }

  componentDidMount = () => {
    console.log('fetching');
    getTodoList()
    .then(({data}) => {
        this.props.setTodoList(data);
    });
    getLabels()
    .then(({data}) => {
        this.props.setLabelList(data);
    })
  }

  render() {
    const {routes} = this.state;
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
  
  
}

export default App;
