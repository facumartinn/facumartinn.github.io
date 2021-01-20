import React, {Component} from 'react'
import Slider from "react-slick";
import './Work.css'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope)



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      arrows: true,
      accessibility: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="project-1">
            <div className="project-img">
              <img src="./images/pickingapp1.png" alt="pickingapp" />
            </div>
            <div className="description">
              <h1>Picking App</h1>
              <p>Web app para armar pedidos en un depósito de mercadería de un supermercado online. TuAlmacen.com.ar es un supermercado online de la ciudad de mar del plata.</p>
              <ul className="tech-list">
              <li><FontAwesomeIcon className="hvr-grow" icon={["fab", "js-square"]}>Node.js</FontAwesomeIcon></li>
              <li><FontAwesomeIcon className="hvr-grow" icon={["fab", "node"]}>Express.js</FontAwesomeIcon></li>
              <li><FontAwesomeIcon className="hvr-grow" icon={["fab", "html5"]}>HTML5</FontAwesomeIcon></li>
              <li><FontAwesomeIcon className="hvr-grow" icon={["fab", "css3"]}>CSS3</FontAwesomeIcon></li>
            </ul> 
            <a href="https://tapickingapp.herokuapp.com/" target="_blank" rel="noreferrer"><Button>Visit the demo!</Button></a>
            </div>
          </div>
          <div className="project-1">
            <h1>One Big Box</h1>
            <p>Development of an e-commerce using</p> 
             
          </div>
        </Slider>
      </div>
      
    );
  }
}