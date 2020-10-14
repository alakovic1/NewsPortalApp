import React, { useState } from "react";
import axios from 'axios';
import { Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import { Input, FormText } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./AddNews.css";

export default function AddNews() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const history = useHistory();

  function validateForm() {
    return title.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  const addOnClick = () => {
  //add news
  axios.post('http://localhost:8080/api/news/add', {
    id: 1,
    picture: "picture111",
    title: title,
    details: details
  }).then(res => {
    console.log(res.data.message);
    history.push('/homePageAdmin');
  }).catch(error => {
    console.log(error);
  });
}

  return (
    <div className="AddNews">
      <form onSubmit={handleSubmit}>
        <p class="title">Add some new news</p>
        <FormGroup className="newsTitle">
          <ControlLabel for="exampleFile">Chose a picture for your news</ControlLabel>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>
        <FormGroup className="newsTitle" controlId="email" bsSize="large">
          <ControlLabel className="label">Title:</ControlLabel>
          <Input 
            type="textarea"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="newsTitle" controlId="password" bsSize="large">
          <ControlLabel className="label2">Details: </ControlLabel>
          <Input type="textarea" 
            value={details}
            onChange={e => setDetails(e.target.value)}
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} onClick={addOnClick} type="submit" className="add-button"> Add </Button>
      </form>
    </div>
  );
}