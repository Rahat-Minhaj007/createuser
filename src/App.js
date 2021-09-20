import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import UserProvider from "./components/Context/Context";
import Home from "./components/Home/Home/Home";
import User from "./components/Home/User/User";
import NoMatch from "./components/NoMatch/NoMatch";


function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/user">
            <User />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            < NoMatch />
          </Route>

        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
