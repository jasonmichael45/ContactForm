import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function handleSubmit(e){
  e.preventDefault()

  // States/props would be ideal, but struggled to integrate Material-UI with class components
  var name_input = document.getElementsByTagName("input")[0].value
  var email_input = document.getElementsByTagName("input")[1].value
  var message_input = document.getElementsByTagName("textarea")[0].value

  var name_pattern = /[A-Za-z]{1}[A-Za-z]/;
  if (!name_pattern.test(name_input)) {
        alert ("Name cannot be less than 2 characters");
      return;
  }

  var email_pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  if (!email_pattern.test(email_input)) {
      alert ("Email address is not valid");
      return;
  }

  if(message_input.length == 0){
    alert("Message is empty");
    return;
  }

  axios.post('/submit', {
    name: name_input,
    email: email_input,
    message: message_input
  })
  .then(function (response) {
    alert("Message sent!")
  })
  .catch(function (error) {
    alert(error)
  });
}

function Form() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField 
          required 
          id="standard-required" 
          label="Required" 
          helperText="Name"
          InputLabelProps={{
            shrink: true,
          }}  
          variant="outlined"

        />
        </div>
      <div>
        <TextField 
          required 
          id="standard-required" 
          label="Required" 
          helperText="Email"
          InputLabelProps={{
            shrink: true,
          }}   
          variant="outlined"

        />
      </div>
      <div>
      <TextField
          required
          id="standard-multiline-static"
          label="Required"
          multiline
          rows={6}
          style={{ margin: 8 }}
          helperText="Message"
          margin="normal"
          placeholder=""
          InputLabelProps={{
            shrink: true,
          }} 
          variant="outlined"

        />
      </div>
      <Button
        type="submit"
        variant="outlined"

      >
        Submit
        
      </Button>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <Typography>Contact Form</Typography>
      <Form/>
    </div>
  );
}

export default App;
