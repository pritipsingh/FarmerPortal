import { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useStateContext } from '../context';
import farmer from '../assets/img/farmer.png'
export const Contact = () => {
  const { account, setTitle, title , setDescription, setMsp, setPrice, setImg, setOwner} = useStateContext();
  const formInitialDetails = {
    title: '',
    description: '',
    msp: '',
    price: '',
    image: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  // const onFormUpdate = (category, value) => {
  //     setFormDetails({
  //       ...formDetails,
  //       [category]: value
  //     })
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOwner(account);
    setButtonText("Sending...");
   console.log(title)
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={farmer} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Sell your Crops</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="MSP" onChange={(e) => setMsp(e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.email} placeholder="price" onChange={(e) => setPrice(e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="file" value={formDetails.phone} placeholder="Image" onChange={(e) => setImg( e.target.value)}/>
                    </Col>
                   
                    
                     <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>

                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}