import React,{useState,useEffect} from 'react'
import TaskList from './TaskList' 
import TaskInput from './TaskInput'
import './App.css'

const App = () => {

  const[task,setTask] = useState("")
  const [todos,setTodos] = useState([])
  const [msg,setMsg] =useState("")
  const [last,setLast] = useState("")
  const [isedit,setIsedit] = useState(1)
  const [show,setShow] = useState(false)


  const changeHandler = e =>
  {
    setTask(e.target.value);
  }
  const submitHandler = e =>
  {
    e.preventDefault();
    if (!task)
    {
      alert('Add task');
    }
    else{
    const newTodos = [...todos,task];
    setLast(task);
    setTodos(newTodos);
    setTask("");
    setMsg("Task Added Succesfully");
    setShow(false);
    }
    
  }
  
  const viewHandler = () =>
  {
      setIsedit(0);
      setMsg("");
      setLast("");
      setShow(true);   
  }
  
const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) =>index != indexValue)
    setTodos(newTodos)
    
}


  return (
    <div>
      <center>
        <div className='container'>
            <h1>Todo Application</h1>
            <form onSubmit={submitHandler}>
              <input type="text" placeholder='Add Task' value = {task} onChange = {changeHandler}  /> &nbsp;&nbsp;&nbsp;
              <input type="submit" value = "ADD" name ="add"  />
              <input type="button" value = "VIEW" onClick = {viewHandler} />

             
            </form>
            <h2>{msg}</h2>
            <TaskInput  last = {last} ></TaskInput>
            {isedit ? "" :<TaskList disabled = {show} todolist = {todos}  deleteHandler={deleteHandler} ></TaskList>}
            

        </div>
      </center>
    </div>
  )
}

export default App
