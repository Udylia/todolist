import { useState } from "react";
import { slides } from "./slides";

function Carousel() {
  const [slide, setSlide] = useState(0);
  const { image } = slides[slide];


  const prevImage = () => {
    setSlide((slide => {
      slide--;
      if (slide < 0) {
        return slides.length - 1;
      }
      return slide;
    }));
  };

  const nextImage = () => {
    setSlide((slide => {
      slide++;
      if (slide > slides.length - 1) {
        slide = 0;
      }
      return slide;
    }));
  };

  return (
    <div>
      
      <div className='container'>
        <img src={image} width="400px" alt="Todo" />
      </div>
      <div className='container'>
        <button className="btn" onClick={prevImage}>&#8592;Предыдущий</button>
        <button className="btn" onClick={nextImage}>Следующий&#8594;</button>
      </div>
    </div>
  )
}

export default Carousel;
