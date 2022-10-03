import './App.css';
import Feed from "./component/feed"
import Login from './component/login';
import Profile from './component/profile';
import Signup from './component/signup';
import PageNotFound from './component/pageNotFound';
// import PageNotFound from './component/pageNotFound';
import Forget from './component/forget';
import {Switch, Route} from "react-router-dom"


function App() {
  return (<>
  <Login></Login>
      <Switch>
        <Route path="/feed">
          <Feed></Feed>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/forget">
          <Forget></Forget>
        </Route>
        <Route path="/forget">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </>
  );
}

export default App;
