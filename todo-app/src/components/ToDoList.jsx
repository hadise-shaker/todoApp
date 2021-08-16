import React,{useState,useEffect} from 'react'
import  "../assets/css/toDoList.css"
import { useDispatch,useSelector } from "react-redux";
import {getTasks,addATask} from "../redux/actions/tasksActions"
import Input from "./Input"
import Task from "./Task"
import { addTask } from '../api/tasks';
import { toast } from "react-toastify";
import Button from "./Button"
import {useStyles}from "./Login"
const ToDoList = () => {
    const [showAdd, setShowAdd] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [search, setSearch] = useState("")
    const [added, setAdded] = useState("")
    const [data,setData]=useState([])
    const tasks = useSelector((state) => state.tasks.task);
    console.log(tasks);
    const handleShowAdd =()=>{
        setShowSearch(false)
        setShowAdd(!showAdd)
    }
    const handleShowSearch =()=>{
        
        setShowAdd(false)
        setShowSearch(!showSearch)
    }
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getTasks());

      }, []); 
      const handleAdd =()=>{
          if (added) {
            dispatch(addATask({description:added}))
          }
          else{
            toast.error("please enter ")
          }
          
      }
      const classes = useStyles()
      useEffect(() => {
        if (search !== '') {
          console.log("search");
          const filteredData = tasks?.filter(task => task.description.toLowerCase().includes(search.toLowerCase()))
          console.log("filteredData",filteredData);
          setData(filteredData)
  
        }
        else{
            setData(tasks)
          }
        }, [search,tasks])
    return (
        <div>
           <div className="todolist">
               <div className="title">
                <h1>THINGS TO DO</h1>
                {showAdd&&
                <><Input type="text" placeholder="add" onChange={(e)=>setAdded(e.target.value)} /> <Button onClick={handleAdd} className={classes.btnSubmit}>Add</Button> </>}
                {showSearch&&
                <><Input type="text" placeholder="serach" onChange={(e)=>setSearch(e.target.value)}/> <Button /* onClick={handleSearch} */ className={classes.btnSubmit}>Search</Button></>}
                
               </div>
                <ul className="list-unstyled">
                {data?.map((task,index)=>{
                    return(
                        <Task key={index} data={task}/>
                        )
                })}
                </ul>
                <button className="btn" onClick={handleShowAdd}>+</button>
                <button className="btn" onClick={handleShowSearch}>search</button>
           </div>
        </div>
    )
}

export default ToDoList
