import React,{useState} from 'react'
import {TextField} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Input from "./Input"
import Button from "./Button"
import { Redirect } from 'react-router-dom';
import {Link,useHistory} from "react-router-dom"
import {loginUser}from "../redux/actions/userActions"

import { logDOM } from '@testing-library/react';
import { useDispatch, useSelector } from "react-redux";

export const useStyles = makeStyles((theme) => ({

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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error,setError]=useState(false)
    const [empty,setEmpty]=useState(false)
    const [loading,setLoading]=useState(false)
    const { isLoggedIn } = useSelector(state => state.user);
/*     const { message } = useSelector(state => state.message); */
  
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogin=(e)=>{
        e.preventDefault();
        if (email,password) {
            
            dispatch(loginUser(email,password))
            
            .then((res)=>{
                
                
                    
                    history.push("/todo-list");
                    /* window.location.reload(); */
               
            }).catch((err)=>{
                setError(true)
                setEmpty(false)
            })
        }
        else{
            setError(false)
            setEmpty(true)
            
        }
       

    }
/*     if (isLoggedIn) {
        return <Redirect to="/todo-list" />;
      } */
    return (

<div className={classes.card}>
    <div className={classes.title}> 
     <h1>Login Form</h1> 
     </div>

{loading&&<h1>loading</h1>}
                    
            <form   autoComplete="off" onSubmit={handleLogin}>
                <Input type="text" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
               
                <Input type="text" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
                {error&&<h6 style={{color:"red"}}>Please Enter A Valid Username and Password</h6>}
                {empty&&<h6 style={{color:"red"}}>Please Enter Username and Password</h6>}
                <Button type="submit"  className={classes.btnSubmit}> Submit</Button>
                Don't have an account? <Link href="/signup" to="/signup" >Sign Up</Link>
                <div className={classes.btnGroup}>
                <Button className={`${classes.btn} ${classes.blue}`}><i class="fa fa-facebook" aria-hidden="true"></i></Button>
                <Button className={`${classes.btn} ${classes.red}`}><i class="fa fa-google" aria-hidden="true"></i></Button>
                <Button className={`${classes.btn} ${classes.green}`}><i class="fa fa-twitter" aria-hidden="true"></i></Button>
                </div>
{/*                 {message && (
            <div >
              <div >
                {message}
              </div>
            </div>
          )} */}

         </form>
         </div>



    )
}

export default Login
