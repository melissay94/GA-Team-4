import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/SignupUser";
import Home from "../pages/Home";
import Profile from "../pages/ProfileUser";
import EditProfile from "../pages/EditProfileUser";
import SearchResults from "../pages/SearchResultsUser";
import Organization from "../pages/OrganizationUser";

function Content(props) {
  return(
    <Switch>
      <Route path="/" exact={true} component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" render={() => <Home user={props.user} />} />
      <Route path="/profile" exact={true} component={Profile} />
      <Route path="/profile/edit" component={EditProfile} />
      <Route path="/search" component={SearchResults} />
      <Route path="/organization/:id" component={Organization} />
    </Switch>
  );
}

export default Content;