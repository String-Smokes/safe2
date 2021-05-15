import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Election from "./pages/election/Election";
import Activity from "./pages/activity/Activity";
import CreateElection from "./pages/election/CreateElection";
import CreateActivity from "./pages/activity/CreateActivity";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>

       

        <Route exact path="/activity">
          {user ? <Activity/> : <Register />}
        </Route>


        <Route path="/feeds">
          {user ?  <Home/> : <Login/>  }
        </Route>

        <Route exact path="/election">
          {user ?  <Election/> : <Login/>  }
        </Route>

        <Route  path="/election/create">
          {user ?  <CreateElection/> : <Login/>  }
        </Route>

        <Route  path="/activity/create">
          {user ?  <CreateActivity/> : <Login/>  }
        </Route>


        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
