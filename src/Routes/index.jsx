import { Switch, Route } from "react-router-dom";
import Register from "../Pages/Register";
import InstitutionalPage from "../Pages/InstitutionalPage";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Users from "../Pages/Users";
import Home from "../Pages/Home";
import SuperiorMenuBar from "../Components/SuperiorMenuBar";
import InferiorMenuBar from "../Components/InferiorMenuBar";
import ProfilePets from "../Pages/ProfilePets";

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
        <SuperiorMenuBar />
        <Home />
        <InferiorMenuBar />
      </Route>

      <Route path="/users/:id">
        <SuperiorMenuBar />
        <Users />
        <InferiorMenuBar />
      </Route>

      <Route path="/profile/:id">
        <SuperiorMenuBar />
        <Profile />
        <InferiorMenuBar />
      </Route>
    </Switch>
  );
};

export default Routes;
