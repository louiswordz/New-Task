import {useState, useEffect} from 'react'
import axios from 'axios';
import {format} from 'date-fns'
import './App.css';

const baseUrl = 'http://localhost:5000';

function App() {
  const [description, setDescription] = useState('');
  const [taskList, setTaskList] = useState([]);
  
  const fetchtask =async ()=>{
    const data = await axios.get(`${baseUrl}/task`);
    const {tasks} = data.data;
    setTaskList(tasks);
  }

  const handleChange =(e)=>{
    setDescription(e.target.value);
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      const data = await axios.post(`${baseUrl}/task`, {description});
      setTaskList([...taskList, data.data]);
      setDescription('');
    }catch(err){
      console.error(err.message)
    }
  }

  useEffect(()=>{
    fetchtask()
  },[])

  return (
    <div className="App">
      <section className="App-header">
        <form>
          <label htmlFor='description'>Description</label>
          <input type='text' name="description"
           value={description} id='description'
           onChange={handleChange} />

           <input type='Submit' value="Submit" onClick={handleSubmit}/>
        </form>
      </section>
      <section>
        <ul>
        {taskList.map((task)=>{
          return<li>task.description</li>})
        }
        </ul>
      </section>
    </div>
  );
}

export default App;
