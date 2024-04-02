import React from 'react'

const TaskInput = ({last}) => {
  
    return (
      <div>
        {last.length > 0 ? <div className='delete'>
          <div className='id'>{last}</div>
        </div> :""}
      </div>
    )
  
  
}

export default TaskInput
