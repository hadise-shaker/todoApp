import React,{useState} from 'react'
import {TextField} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Input from "./Input"
import Button from "./Button"
import {Link,useHistory} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/userActions";
import {registerUser}from "../api/login"
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
    marginTop:"20px",
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
const Signup = () => {
    const classes = useStyles();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")
    const [empty, setEmpty] = useState(false)
    const [emailError, setEmailError] = useState(false)
/*     const { message } = useSelector(state => state.message); */
    console.log();
    const dispatch = useDispatch();
    const history = useHistory();
    const handleRegister=(e)=>{
        e.preventDefault();
        const emailRegex = RegExp(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
        );
        if (name,email,password,age) {
            if (!emailRegex.test(email)) {
                setEmpty(false)
                setEmailError(true)
                
            }else{
                setEmailError(false)
            }
           /*  registerUser(email,password,name,age) */
            dispatch(register(email,password,name,age))/* .then((res)=>history.push("/")) */
           

        }else{
            setEmpty(true)
        }
       
       

    }
    return (

    <div className={classes.card}>
        <div className={classes.title}> 
            <h1>Register Form</h1> 
        </div>

                    
            <form   noValidate autoComplete="off" onSubmit={handleRegister}>
                <Input type="text" placeholder="Enter name *" onChange={(e)=>setName(e.target.value)} />
                <Input type="text" placeholder="Enter email *" onChange={(e)=>setEmail(e.target.value)} />
                {emailError&&<h6 style={{color:"red"}}>Please Enter A Valid Email</h6>}

                <Input type="text" placeholder="Enter password *" onChange={(e)=>setPassword(e.target.value)} />

                <Input type="number" placeholder="Enter age *"onChange={(e)=>setAge(e.target.value)} />
                {empty&&<h6 style={{color:"red"}}>Please Enter Information</h6>}
                <Button type="submit"  className={classes.btnSubmit}> SignUp</Button>
                <Button   className={classes.btnSubmit}> <Link to="/">login</Link> </Button>
                <div className={classes.btnGroup}>
                    <Button className={`${classes.btn} ${classes.blue}`}><i class="fa fa-facebook" aria-hidden="true"></i></Button>
                    <Button className={`${classes.btn} ${classes.red}`}><i class="fa fa-google" aria-hidden="true"></i></Button>
                    <Button className={`${classes.btn} ${classes.green}`}><i class="fa fa-twitter" aria-hidden="true"></i></Button>
                </div>

         </form>
         </div>



    )
}

export default Signup
