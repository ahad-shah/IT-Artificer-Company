
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '/node_modules/bootstrap/dist/js/bootstrap.min';
//  import '/node_modules/bootstrap/js/dist/carousel';


import image1 from './images/imageone.jpg';
import image2 from './images/imagetwo.jpg';
import image3 from './images/imagethree.jpg';
import { Carousel } from 'react-bootstrap';

import './homecarousal.css'

const Home =()=>{
    return(
        <>
        

<div style={{overflow:'hidden'}}>
  <Carousel>
    <Carousel.Item>
    <div className="carbox">
    <img src={image1}   alt="not showing" />

    </div>
   
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>

    <div className="carbox"><img src={image2}  alt="not showing" /></div>
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <div className="carbox"><img src={image3}  alt="not showing" /></div>
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>

        </>
    )
}

export default Home;