import { useState } from "react";
import { slides } from "./slides";
import { data } from "./data";
import './App.css';

function App() {

  const [slide, setSlide] = useState(0);
  const {image} = slides [slide];
  const [toDo, setToDo] = useState(data);
  const removeItem = (id) => {
    let newArray = toDo.filter((item) => item.id !== id);
    setToDo(newArray);

  }

  const prevImage = () => {
    setSlide ((slide => {
      slide --;
      if (slide < 0){
        return slides.length -1;
      }
      return slide;
    }))
  }

  const nextImage = () => {
    setSlide ((slide => {
      slide ++;
      if (slide > slides.length -1){
        slide =0;
      }
      return slide;
    }))
  }
 
  
  
  return (
    <div>
      <div className="container">
        <h1>Список из {toDo.length} дел</h1>
      </div>
      <div className='container'>
        <img src={image} width="400px"  alt="Todo"/>
      </div>
      <div className='container'>
      <button className="btn" onClick={prevImage}>&#8592;Предыдущий</button>
      <button className="btn" onClick={nextImage}>Следующий&#8594;</button>
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
  )
    
}

export default App;
