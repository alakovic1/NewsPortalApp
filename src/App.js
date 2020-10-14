import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditNews from "./components/EditNews";
import TabularView from "./components/TabularView";
import AddNews from "./components/AddNews";
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
			<Route path="/addNews" component={AddNews}></Route>
			<Route path="/tabularView" component={TabularView}></Route>
			<Route path="/editNews" component={EditNews}></Route>
		</Switch>
	</Router>
    );
}

export default App;
