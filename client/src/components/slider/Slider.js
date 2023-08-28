import './Slider.css';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { useState } from 'react';
import banner1 from '../../assets/banner1.jpeg'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.jpeg'


const Slider = () => {

    const [currentSlide, setslide] = useState(0);

    const prevSlide = () => {
        setslide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }

    const nextSlide = () => {
        setslide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }

  const data = [
    banner2,
    banner3,
    banner1,
    
  ];

  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        
      </div>

      <div className="arrowicons">
        <div className="icon" onClick={prevSlide}>
            <WestIcon /> 
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastIcon />
        </div>
      </div>  

    </div>
  );
};

export default Slider;
