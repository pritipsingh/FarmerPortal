/* eslint-disable jsx-a11y/anchor-is-valid */
import { CropContext, useStateContext } from '../context';
import React, {useState, useEffect, useContext} from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/img/logo.svg'
import {GiPlantsAndAnimals} from 'react-icons/gi'
const NavBar = () => {
  const {connectWallet, account} = useStateContext();
  const [activelink, setActivelink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => { 
    const handleScroll = () => { 
    if(window.scrollY> 50){
      setScrolled(true)
    }else{
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', handleScroll)
  return () => 
    window.removeEventListener('scroll', handleScroll)
  }, [])

  
const onUpdateActiveLink = (value) => {
  setActivelink(value);
}
  return (
    <div>
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <GiPlantsAndAnimals style={{color: '#fff'}} className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activelink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#services" className={activelink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Services</Nav.Link>
          </Nav>
          <span className="navbar-text">
            
            <button className='vvd' onClick={() => connectWallet()}><span>
              
              {account ? 
              'Connected'
              : 'Connect Wallet'}
              </span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar