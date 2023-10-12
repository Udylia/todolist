import { useState } from "react";
import { data } from "./data";

function ToDoList() {
    const [toDo, setToDo] = useState(data);
    const removeItem = (id) => {
    let newArray = toDo.filter((item) => item.id !== id);
    setToDo(newArray);
    }

    return (
    <div>
         <div className="container">
                <h1>Список из {toDo.length} дел</h1>
            </div>
        {toDo.map((element => {
        const {id, toDoData} = element;
        return (
        <div key={id}>
            <div className='container'>
                <p>{id} - {toDoData}</p>
            </div>
            <div className="container">
                <button className="btn" onClick ={() => removeItem(id)}>Удалить из списка</button>
            </div>
        </div>
        )
        }))}
        <div className='container'>
            <button className="button" onClick ={() => setToDo([])}>Очистить весь список</button>
        </div> 
    </div>
    )}
     
 export default ToDoList;