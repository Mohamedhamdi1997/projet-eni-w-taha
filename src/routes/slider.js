
import SimpleImageSlider from "react-simple-image-slider";
import {usestate} from "react";
import { HiArrowNarrowRight,HiArrowNarrowLeft } from 'react-icons/hi';
import { IconContext } from "react-icons";
import '../gallery.css';
import Img1 from '../img/img1.png';
import Img2 from '../img/img2.png';
import Img3 from '../img/img3.png';
import Img4 from '../img/img4.png';
import Img5 from '../img/img5.png';
import Img8 from '../img/img8.png';
import Img9 from '../img/img9.png';
import Img10 from '../img/img10.png';
import Img11 from '../img/img11.png';


const Slider=() => {
    return (
        <div>
          <SimpleImageSlider
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      );
};

 
      const images = [
        { url: "Img8" },
        { url: "Img2" },
        { url: "Img3" },
        { url: "Img9" },
        { url: "Img4" },
        { url: "Img1" },
        { url: "Img11" },
        { url: "Img10" },
        { url: "Img5" },
      ];

      export default Slider;