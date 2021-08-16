import React from 'react'

const task = ({data}) => {
    return (
        <div>
             <li><input type="checkbox"/>{data?.description}</li>
        </div>
    )
}

export default task
