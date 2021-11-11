import { Switch, Route } from "react-router-dom";
import Register from "../Pages/Register";
import InstitutionalPage from "../Pages/InstitutionalPage";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Users from "../Pages/Users";
import Home from "../Pages/Home";

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

      <Route path="/users">
        <Users />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
