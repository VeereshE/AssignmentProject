import {BrowserRouter,Switch, Route} from 'react-router-dom';

import Login from './Components/Login';
import Register from './Components/Register'
import Verify from './Components/Verify';
import Task from './Components/Task'
import "./App.css"

const App = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path= "/verify" component={Verify}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/task' component={Task}/>
    </Switch>
  </BrowserRouter>
)

export default App