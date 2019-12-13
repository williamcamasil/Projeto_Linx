import React from "react";
import { render } from "react-dom";
// import Slider from "npm install react-animated-slider";
import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";
import home2 from "../../assets/img/home2.jpg";
import home3 from "../../assets/img/home3.jpg";
import home4 from "../../assets/img/home4.jpg";
import home1 from "../../assets/img/home1.jpeg";


const content = [
  {
    image: home1,
  },
  {
    title: "Somos um Sacolão Digital",
    image: home2,
  },
  {
    title: "Oferecemos maior variedade de produtos com ótimos preços",
    image: home3,
  },
  {
    title: "Encontre nossos produtos pertinho de você",
    image: home4,
  },
];

const Carousel = () => (
  <div>
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div key={index} className="slider-content"
        style={{ background: `url('${item.image}') no-repeat center center` }} >
          <div className="inner">
            <h1>{item.title}</h1>
            {/* <button>{item.button}</button> */}
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

render(<Carousel />, document.getElementById("root"));

export default Carousel;
