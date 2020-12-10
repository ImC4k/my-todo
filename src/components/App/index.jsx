import NotFound from '../NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import React, {Component} from 'react';
import routes from '../../routes';

import { getTodoList } from '../../api/todoList.service';
import { getLabels } from '../../api/labels.service';
class App extends Component {

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
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            {
              routes.map(route => 
                <Route key={route.name} path={route.path} component={route.component} exact />
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
