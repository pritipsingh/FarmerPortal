import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    
      <section className='skill' id='skills'>
        <Container>
          <Row>
            <Col>
            <div className="skill-bx">
              <h2>
                Funfacts About Farmers
              </h2>
              <p>Almost all industries depend on agricultural raw products. Agriculture is the backbone of all countries. Each country's GDP, economy, development, etc. depends on agricultural growth.</p>
              {/* <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image1" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image3" />
                  <h5>Logo Description</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image5" />
                  <h5>Web Development</h5>
                </div>

              </Carousel> */}
            </div>
            </Col>
          </Row>
        </Container>
        <img className='background-image-left' src={colorSharp} alt="color-img"/>
      </section>
    
  )
}

export default Skills