import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./HomePageAdmin.css";

export default function HomePageAdmin() {
	const history = useHistory();
  	const navigateTo = () => history.push('/');

  return(
  	<body>
  	<div class="topBar">
  	<h1 class="title">Softray Soultions News Portal</h1>
	<p class="text">Welcome, Admin!</p>
  	<button class="login" onClick={navigateTo}>Logout</button>
  	</div>
	  <div class="meni">
	  <ul>
		<li><Link to="/addNews">Add News</Link></li>
		<li><Link to="/tabularView">Tabular View</Link></li>
		</ul>
	  </div>
  	</body>
  	);
}