import { Switch, Route } from "react-router-dom";
import Register from "../Pages/Register";
import InstitutionalPage from "../Pages/InstitutionalPage";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Users from "../Pages/Users";
import Home from "../Pages/Home";
import RegisterAPet from "../Pages/RegisterAPet";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <InstitutionalPage />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/users/:id">
        <Users />
      </Route>

      <Route path="/profile/:id">
        <Profile />
      </Route>

      <Route path="/registerapet">
        <RegisterAPet />
      </Route>
    </Switch>
  );
};

export default Routes;
