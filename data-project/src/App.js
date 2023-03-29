import {Switch, Route} from 'react-router-dom';

import Login from './Components/Login';
import Register from './Components/Register'
import Verify from './Components/Verify';
import "./App.css"

const App = () =>(
  <Switch>
    <Route exact path="/" Component={Login}/>
    <Route exact path= "/verify" component={Verify}/>
    <Route exact path='/register' Component={Register}/>
  </Switch>
)

export default App