import React from 'react'
import {TextField} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Input from "./Input"
import Button from "./Button"
const useStyles = makeStyles((theme) => ({

  container:{
    backgroundColor:"#5d8fc9",

  },
  card:{
    width:"350px",
    borderRadius: "25px",
    margin:"150px auto",
    backgroundColor:"white",
    position: "relative",
    padding:"10px 30px 65px"
   /*  display: -ms-flexbox; */
   /*  display: "flex", */
   /*  -ms-flex-direction: column; */
    /* flexDirection: "column", */
   
  },
  title:{
      textAlign:"center"
  },
  btnSubmit:{
    width:"100%",
    backgroundColor:"#007bff",
    textAlign:"center",
    padding:"10px",
    borderRadius:" 30px",
    border:"none",
    cursor:"pointer",
    color:"white",
    fontSize:"1em",
    '&:hover':{
        backgroundColor:"#0069d9",
    }
    
  },
  btn:{
      borderRadius:"50%",
      width:"50px",
      height:"50px",
      fontSize:"15px",
      margin:"7px",
      border:"none",
      cursor:"pointer",
      color:"white"
  },
  red:{
      backgroundColor:"#dc3545",
      '&:hover':{
        backgroundColor:"#bb3845"
    }
  },
  blue:{
      backgroundColor:"#007bff",
      '&:hover':{
          backgroundColor:"#0069d9"
      }
  },
  green:{
      backgroundColor:"#17a2b8",
      '&:hover':{
        backgroundColor:"#178c9e"
    }
  },
  btnGroup:{
      position:"absolute",
    bottom: "-35px",
    padding: "5px",
    margin: "0px 55px",
    alignItems: "center",
  }
}));
const Login = () => {
    const classes = useStyles();
    return (

<div className={classes.card}>
    <div className={classes.title}> 
     <h1>Login Form</h1> 
     </div>

              <div>
                    
            <form   noValidate autoComplete="off">
                <Input type="text" placeholder="Enter email"  />
                <Input type="text" placeholder="Enter password" />
                <Button type="submit"  className={classes.btnSubmit}> Submit</Button>
                <div className={classes.btnGroup}>
                <Button className={`${classes.btn} ${classes.blue}`}><i class="fa fa-facebook" aria-hidden="true"></i></Button>
                <Button className={`${classes.btn} ${classes.red}`}><i class="fa fa-google" aria-hidden="true"></i></Button>
                <Button className={`${classes.btn} ${classes.green}`}><i class="fa fa-twitter" aria-hidden="true"></i></Button>
                </div>

                
               
           
{/*                    <TextField 
                    error
                    id="outlined-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="outlined"
                    />
                   <TextField
                    error
                    id="outlined-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="outlined"
                    /> */}
         </form>
         </div>
         </div>


    )
}

export default Login
