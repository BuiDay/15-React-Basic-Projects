import './App.css';
import React, {useState} from 'react';
import Alert from './Alert';
import List from './List';

function App() {
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = ()=>{
    if(!task){
      showAlert(true, 'danger', 'please enter value');
    }else if(task && isEditing )
    {
      setTasks(tasks.map((item)=>{
        if(item.id === editID){
          return {...item, 'title':task};
        } return item;
      }))
      setTask('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    }
    else{
      showAlert(true, 'success', 'item added to the list');
      const count = Math.floor(Math.random()*1000);
      const item = {
        'id': count,
        'title': task
      };
      setTasks((preTask)=>{
        const newTasks = [...preTask, item];
        return newTasks;
      });
      setTask('');
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({show, type, msg });
  };

  const editItem = (id) => {
    const specificItem = tasks.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setTask(specificItem.title);
  };

  const deleteTask = (id) =>{
    setTasks(tasks.filter((item)=>item.id !== id));
    showAlert(true, 'danger', 'item removed');
  }

  const clearAll = ()=>{
    setTasks([]);
    showAlert(true, 'danger', 'empty list');
  }

  return (
    <main>
      <section className='container'>
        {alert.show && <Alert alert={alert} tasks={tasks} removeAlert={showAlert}/>}
        <h2>Grocery Bub</h2>
        <div className='form'>
          <input value={task} type="text" placeholder='e.g. eggs' onChange={event=>setTask(event.target.value)}/>
          <button className='btn btn__submit' type='submit' onClick={handleSubmit}>{isEditing ? 'edit' : 'submit'}</button>
        </div>
        {tasks.map((Task,index)=>{
          return(
          <List key={index} Task ={Task} deleteTask = {deleteTask} editItem={editItem} />
          )
        })}
        <button type="" className='btn btn__clear' onClick={()=>clearAll()} >Clear Items</button>
      </section>
    </main>
   
  );
}

export default App;
