import React from 'react'

const TaskList = ({todolist,deleteHandler,disabled}) => {
  if(todolist.length ==0)
  {
     return('No tasks available');
  }
  return (
    !disabled ? "" :
    <div>
    {todolist.map((todo,index)=>
    <div className='delete'>
     <div className='id'>{todo}</div>
     <button className='btn' onClick={()=> deleteHandler(index)}>DELETE</button>
    </div>
   )} 
 </div>
  )
}

export default TaskList
