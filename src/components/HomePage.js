import React from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
	const history = useHistory();
	const navigateTo = () => history.push('/login');
	  
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
  	<button class="login" onClick={navigateTo}>Login for Admin</button>
  	</div>
  	</body>
  	);
}