import React from "react";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import "./HomePageAdmin.css";

export default function HomePageAdmin() {
	const history = useHistory();
	  const navigateTo = () => history.push('/');
	  
	  const news = [];
	  //get all news from database -- for some reason not working :(
		axios.get('http://localhost:8080/api/news/all')
		.then(response => {
		for (const [, value] of response.data.entries()) {
			let q = {
				picture: value.picture,
				title: value.title,
				details: value.details
			};
			news.push(q);
		}
	})
	.catch(error => {
		console.log(error);
	});

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