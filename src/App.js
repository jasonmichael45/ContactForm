import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
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
          rows={4}
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

    
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
