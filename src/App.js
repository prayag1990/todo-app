import React, { useState } from "react"; 
import './App.css';
import logo from './nCode-logo.png';


const App = () => { 
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState([0]);
   
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo!=='') {
      setTodos([{ id: `${todo}-${Date.now()}` , todo }, ...todos])
    }
  };
  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id );
    setTodos([...delTodo]);
  };
  const handleEdit = (id) => {
    const editToo=todos.find((i)=>i.id===id);
    setTodo(editToo.todo);
    setEditId(id);
  };

  return ( 
   <div className="App">
     <div className="main_box">
       <div className="logo">
          <img src={logo} alt="logo" />
        </div>
       <form className="todoFrom" onSubmit={handleSubmit}>
         <input className="input-text" type="text" 
         value={todo} 
         onChange={(e) => setTodo(e.target.value)} />
         <button type="submit">Go</button>
       </form>
       <ul className="allTods">
         {
           todos.map((t) => (
           <li className="singleTodo">
            <span className="singleText" key={t.id}>
              {t.todo}
             </span>
            <button onClick={()=>handleDelete(t.id)}>Delete</button>
            <button className="edit-button" onClick={()=>handleEdit(t.id)}>Edit</button>
           </li>
           ))}
       </ul>
      </div>
     </div>
 );
};

export default App;
