import React from "react";
import { useHistory } from "react-router-dom";
import "./HomePageAdmin.css";

export default function HomePage() {
	const history = useHistory();
  	const navigateTo = () => history.push('/');

  return(
  	<body>
  	<div class="topBar">
  	<h1 class="title">Softray Soultions News Portal</h1>
  	<button class="login" onClick={navigateTo}>Logout</button>
  	</div>
  	</body>
  	);
}