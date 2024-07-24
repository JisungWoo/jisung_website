import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {BrowserRouter as Router} from "react-router-dom";

export const NavBar = () =>  // Defines a functional component called 'NavBar' for naviation bar
{ 

  const [activeLink, setActiveLink] = useState('AboutMe'); // 'activeLink' with a default value of 'About Me' to keep track of the currently active link
  const [scrolled, setScrolled] = useState(false); // 'scrolled' with a default value of 'false' to keep track of whether the page has been scrolled down

  useEffect(() => // Effect hook where it uses UseEffect hook to add a scroll event listener when the component mounts and clean it up when it unmounts
  { 
    const onScroll = () => 
    {
      if (window.scrollY > 50) 
      {
        setScrolled(true);
      } 
      else 
      {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll); // onScroll function as a listener to the window's 'scroll' event

    return () => window.removeEventListener("scroll", onScroll); // returns cleanup function to remove the event listener when the component unmounts
  }, [])

  const onUpdateActiveLink = (value) => // onUpdateActiveLink function that updates activeLink state to provided 'value'
  {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand href="/" className="brand-text">
          Jisung Woo
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#AboutMe" className={activeLink === 'AboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('AboutMe')}>About Me</Nav.Link>
              <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Project</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
