import { Switch, Route, Redirect } from "react-router-dom";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Users from "../Pages/Users";
import Home from "../Pages/Home";
import SuperiorMenuBar from "../Components/SuperiorMenuBar";
import InferiorMenuBar from "../Components/InferiorMenuBar";
import ProfilePets from "../Pages/ProfilePets";
import ProfileEdit from "../Pages/ProfileEdit";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
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

      <Route exact path="/profile/:id">
        <SuperiorMenuBar />
        <Profile />
        <InferiorMenuBar />
      </Route>

      <Route path="/profile/edit/:id">
        <SuperiorMenuBar />
        <ProfileEdit />
        <InferiorMenuBar />
      </Route>

      <Route path="/profile/pet/:id">
        <SuperiorMenuBar />
        <ProfilePets />
        <InferiorMenuBar />
      </Route>
    </Switch>
  );
};

export default Routes;
