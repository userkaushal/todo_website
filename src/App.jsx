import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);


  const saveLocalestorage = () => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  // localStorage.setItem('todos',todos);
  // localStorage.clear();
  useEffect(() => {
    let stodos = JSON.parse(localStorage.getItem("todos"));
    // console.log(stodos);
    if(stodos){
      // setTodos(JSON.parse(localStorage.getItem("todos")));
      setTodos(stodos);
    }
    setIsInitialLoad(false); // Set to false after initial load

  }, []);   

  useEffect(()=>{
    if (!isInitialLoad) {

    localStorage.setItem("todos",JSON.stringify(todos));
    // console.log(JSON.parse(localStorage.getItem("todos")));
  }

  }, [todos, isInitialLoad]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };    

  const handleAdd = () => {
    // console.log(todo);
    if(todo === "" || todo.trim() === ""){
      alert("Enter Task!");
    }else{    
      setTodos([...todos, {id:uuidv4(), todo, isCompleted: false }]);
      setEditing(false);
      // console.log(todos);
      setTodo("");
      saveLocalestorage();
      // console.log(JSON.parse(localStorage.getItem("todos")));
    }
  };

  const handleCheck = (e) => {
    let id = e.target.id;
    // console.log(id);

    // let find_id = todos.filter(nums => nums.id == id);
    // console.log(find_id);

    let index = todos.findIndex(item =>{
      return item.id == id;
    })
    // console.log(index);

    let uptodos = ([...todos]);
    uptodos[index].isCompleted = !uptodos[index].isCompleted;
    setTodos(uptodos);
    saveLocalestorage();
    // console.log(uptodos, todos);
  }

  const handleEdit = (e, id) => {

    let index = todos.findIndex(item => {
      return item.id === id;
    })

    setTodo(todos[index].todo);
    setEditing(true);

    // console.log(index);
    let upttodo = todos.filter(item=>{
      return item.id !== id;
    })
    setTodos(upttodo);
    saveLocalestorage();
   };

  const handleDelete = (e, id) => { 

    if(window.confirm("Do you really want to delete task?")){

      let index = todos.findIndex(item=>{
        return item.id === id;
      })
      // console.log(index);
  
      let uptodos = todos.filter(item=>{
        return item.id !== id;
      })
      // console.log(uptodos);
      setTodos(uptodos);
      saveLocalestorage();
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-sm:container container w-4/5 bg-stone-300 min-h-[80vh] m-auto rounded-lg">
        <div className="p-3" id="outer">
          <div className="" id="inner">
            <h2 className="text-2xl justify-center flex">Add New Todo</h2>
            <div className="pt-5 flex gap-4 m-auto justify-center max-sm:flex-col max-sm:items-center text-base">
              <input
                type="text"
                value={todo}
                onChange={handleChange}
                className="rounded-md w-[60%] max-sm:w-11/12 text-xl max-sm:text-xl p-1"
                placeholder="Enter Task"
              />
              <button
                onClick={handleAdd}
                className="text-stone-300 bg-green-700 text-xl p-2 rounded-md w-2/12 max-sm:w-11/12 max-sm:p-1 hover:bg-green-800"
              >
                Add
              </button>
            </div>
          </div>
          <hr className="mt-3 bg-white h-[2px]" />

          <div className="mt-2" id="inner2">
            <h2 className="text-2xl flex justify-center">Your Todos</h2>
          
            {todos.length === 0 ? <div className="flex items-center justify-center mt-4 text-xl">No todos</div> : todos.map((item) => {
              return (
                <div className="p-2 flex justify-between border-b" key={item.id}>
                  <div className="flex justify-start gap-1">                  
                  <input type="checkbox" checked={item.isCompleted} value={item.isCompleted} name="" id={item.id} onChange={handleCheck}/>
                  <span className={item.isCompleted ? "line-through p-1 text-lg" : "p-1 text-lg"}>{item.todo}</span>
                  </div>
                  <div className="flex self-start">
                  <button
                    disabled={editing}
                    onClick={(e)=>{handleEdit(e, item.id)}}
                    className="text-stone-300 bg-green-700 text-sm p-1 rounded-md w-auto m-1 max-sm:p-2 font-semibold hover:bg-green-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e)=>{handleDelete(e, item.id)}}
                    className="text-stone-300 bg-green-700 text-sm p-1 rounded-md w-auto m-1 max-sm:p-2 font-semibold hover:bg-green-800"
                  >
                    Delete
                  </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
