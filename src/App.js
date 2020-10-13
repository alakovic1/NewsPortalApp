import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import HomePageAdmin from "./components/HomePageAdmin";

function App() {
  return (
  	<Router>
		  <Switch>
  			<Route exact path="/" component={HomePage}></Route>
			<Route path="/login" component={Login}></Route>
			<Route path="/homePageAdmin" component={HomePageAdmin}></Route>
		</Switch>
	</Router>
    );
}

export default App;
