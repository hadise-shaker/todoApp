import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const Task = ({data,handleDeleteATask}) => {

    return (
        <div>
             <li > <input type="checkbox"/>  {data?.description} <a style={{cursor:"pointer"}} onClick={()=>{handleDeleteATask(data?._id)}}><i class="fa fa-trash" aria-hidden="true"></i></a></li>
        </div>
    )
}

export default Task
