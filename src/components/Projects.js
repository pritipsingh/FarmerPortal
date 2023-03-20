import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard  from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import TrackVisibility from 'react-on-screen';
import pic1 from "../assets/img/pic1.png";
import pic2 from "../assets/img/pic2.png";
import pic3 from "../assets/img/pic3.png";
import pic4 from "../assets/img/pic4.png";
export const Projects = () => {
// const navigate = useNavigate();
  const projects = [
    {
      title: "Sell your Crops",
      description: "We make sure you get your MSP",
      imgUrl: pic1,
      nav: "/SellCrops"
    },
    {
      title: "Claim your insurance",
      description: "Claim your insurance",
      imgUrl: pic2,
      nav: "/Insurances"
    },
    {
      title: "Blogs & News",
      description: "Read About latest news and blogs about Farming",
      imgUrl: pic3,
      nav: "/"
    },
    {
      title: "Supply And Chain",
      description: "Coming soon",
      imgUrl: pic4,
      nav: "/"
    },
    {
      title: "Coming soon",
      description: "Coming soon",
      imgUrl: pic4,
      nav: "/"
    },
    
  ];



  return (
    <section className="project" id="services">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Services</h2>
              <p>Better the service for Agriculture, better are the for any other industries </p>
              {/* <Tab.Container id="projects-tabs" defaultActiveKey="first"> */}
                {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav> */}
                {/* <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}> */}
                  {/* <Tab.Pane eventKey="first"> */}
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                             
                              />
                          )
                        })
                      }
                    </Row>
                  {/* </Tab.Pane> */}
                  {/* <Tab.Pane eventKey="section">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane> */}
                {/* </Tab.Content> */}
              {/* </Tab.Container> */}
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2} alt=''></img>
  </section>
)
}
export default Projects;