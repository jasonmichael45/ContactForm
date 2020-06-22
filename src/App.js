import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function handleSubmit(){
  console.log("submitted")
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
