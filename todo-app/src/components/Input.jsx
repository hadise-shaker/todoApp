import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    input:{
      boxSizing: "border-box",
        width:"100%",
      borderRadius:" 30px",
      backgroundColor: "#ebf0fc",
      borderColor: "#ebf0fc",
      color: "#9da3b0",
      border: "1px solid #ced4da",
      padding:"15px",
      marginBottom:"20px",
      outline:"none",
      '&::placeholder': { 
          fontWeight:"bold",
              color:"#818992" /* Firefox */
        }
    },

  }));
 const Input = ({type,placeholder,onChange}) => {
    const classes = useStyles();
    return (
        <input  type={type} placeholder={placeholder} className={classes.input} onChange={onChange} />
    )
}


export default Input

