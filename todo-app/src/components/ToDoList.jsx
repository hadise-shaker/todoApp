import React,{useState,useEffect} from 'react'
import  "../assets/css/toDoList.css"
import { useDispatch,useSelector } from "react-redux";
import {getTasks,addATask} from "../redux/actions/tasksActions"
import {deleteTask} from "../redux/actions/tasksActions"
import Input from "./Input"
import Task from "./Task"
import { addTask } from '../api/tasks';
import { toast } from "react-toastify";
import Button from "./Button"
import {useStyles}from "./Login"
import Loading from "./Loading"
import {getTaskByCompleted} from "../api/tasks"
const ToDoList = () => {
    const [showAdd, setShowAdd] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [search, setSearch] = useState("")
    const [added, setAdded] = useState("")
    const [data,setData]=useState([])
    const tasks = useSelector((state) => state.tasks.task);
    const loading = useSelector((state) => state.tasks.loading);
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

      }, [added]); 
      const handleAdd =()=>{
          if (added) {
            setAdded("")
            dispatch(addATask({description:added,completed:false}))
           
            
          }
          else{
            toast.error("please enter ")
          }
          
      }
      const classes = useStyles()
      useEffect(() => {
        if (search !== '') {
          const filteredData = tasks?.filter(task => task.description.toLowerCase().includes(search.toLowerCase()))
          setData(filteredData)
  
        }
        else{
            setData(tasks)
          }
        }, [search,tasks])
        const handleDeleteATask =(id)=>{
            dispatch(deleteTask(id))
            dispatch(getTasks())
        }
        const handleFilterCompleted=()=>{
            getTaskByCompleted().then((res)=>setData(res.data))
            
        }
        const handleFilterAll=()=>{
            setData(tasks)
        }
    return (
        <div>
           <div className="todolist">

                <div className="title">
                   
                    <h1>THINGS TO DO</h1>
                        {showAdd&&
                            <><Input type="text" placeholder="Add New" onChange={(e)=>setAdded(e.target.value)} /> <Button onClick={handleAdd} className={classes.btnSubmit}>Add</Button> </>}
                        {showSearch&&
                            <><Input type="text" placeholder="Search ..." onChange={(e)=>setSearch(e.target.value)}/> <Button  className={classes.btnSubmit}>Search</Button></>}
                   
                  </div>
                  {loading&&<Loading/>}
                  
                  {!loading&& 
                  data?.length>0&&
                     <>
                   <ul className="list-unstyled">
                       
                   {data?.map((task,index)=>{
                       return(
                           <Task key={index} data={task} handleDeleteATask={handleDeleteATask}/>
                           )
                   })}
                   </ul>
                 

        </>   

        
        }
          <footer>
                       <div className="left">
                           <div className="icon">
                                <a onClick={handleShowAdd}><i class="fa fa-plus" aria-hidden="true"></i></a>
                           </div>
                            <div className="icon">
                                <a  onClick={handleShowSearch}><i class="fa fa-search" aria-hidden="true"></i></a>
                            </div>
                           
                       </div>

                       <h6>{data.length} items left</h6>
                       
                       <div className="right">
                            <a className="btn" onClick={handleFilterAll}>all</a>
                            <a className="btn" >active</a>
                            <a className="btn" onClick={handleFilterCompleted}>completed</a>
                       </div>

                   </footer>
               
           </div>
        </div>
    )
}

export default ToDoList
