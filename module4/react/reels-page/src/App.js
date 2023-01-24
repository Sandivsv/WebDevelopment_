import './App.css';
import NavBar from './component/navBar';
import Feed from "./component/feed"
import Login from './component/login';
import Profile from './component/profile';
import Signup from './component/signup';
import PageNotFound from './component/pageNotFound';
import Forget from './component/forget';
// import NavBar from './component/navBar';
import {Switch, Route} from "react-router-dom"
import { AuthContextProvider } from './context/AuthContext';




function App() {
  return (<>
  <NavBar></NavBar>
  {/* <Login></Login> */}
    {/* <Signup></Signup> */}
    <AuthContextProvider>
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
        <Route path="/pageNotFound">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
      </AuthContextProvider>
    </>
  );
}

export default App;
