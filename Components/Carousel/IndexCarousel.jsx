import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgUno from "../../images_carousel/voucher.jpg";
import ImgDos from "../../images_carousel/entregas.jpg";
import ImgTres from "../../images_carousel/informacion.jpg";

const ParaCarousel = () => {
    return (
        <Carousel interval={5000}>
        <Carousel.Item>
          <img src={ImgUno}
           
            alt="ImgUno"
            
            
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ImgDos}
            
            alt="imagen2"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ImgTres}
            alt="imagen3"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>


</Carousel>
    );
  };
  
  export default ParaCarousel