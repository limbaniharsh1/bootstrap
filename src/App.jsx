import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'NavDropdown';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Person, Cart, Moon, Sun } from 'react-bootstrap-icons';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
// import Badge from 'react-bootstrap/Badge'


function App() {
  let [state, setState] = useState(false)
  let [color, setColor] = useState("light")
  let [text,setText] = useState('dark')
  console.log(text)


  let handleClr = () => {
    if (color == "dark") {
      setColor("light")
      setText("dark")
    }
    else {
      setColor('dark')
      setText("light")
    }
  }
  let changer = `bg-${color}`
  let changertext = `text-${text}`
  return (
    <div className="App"  style={{ transition: '0.5s'}}>
      <Navbar expand="lg" bg={color}>
        <Container>
          <Navbar.Brand href="#home"><img src='https://cdn.shopify.com/s/files/1/0027/0952/0502/files/logo_150x.png?v=1666114323' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto" style={{ alignItems: 'center' }}>
              {/* <Nav.Link href="#features" style={{color:'black'}}>Features</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'black'}}>Pricing</Nav.Link> */}
              <Form.Control
                type="search"
                placeholder="Search Our Store"
                className="me-2"
                aria-label="Search"
                style={{ width: '500px' }}
              />

              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav style={{ alignItems: 'center'}} className='d-flex'>
              <Person className={`me-3 ${changertext}`} size='25px' />
              <Cart className={changertext} size='21px' />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={changer}>
      <Container>
        <Row className={changertext}>
          <Col className='align-self-center' lg={6} sm={12}>
            <h1 >Crispy Chicken Burgers</h1>
            <p>Sit amet consectetur adipiscing Malesuada morbigrave ullamore alesuada nec pulvinar nisle</p>
            <button>order now</button>
          </Col>
          <Col className='align-self-center' lg={6} sm={12}><img className='w-100' src='https://demo.webtend.net/html/qichen/assets/images/hero/hero-1.jpg' alt='img2' /></Col>
        </Row>
      </Container>
      </div>

      <div style={{ position: 'absolute', top: '50%', right: '50px' }}>
      {color=="dark" ?  <Sun style={{ backgroundColor: 'cyan', height: '30px', width: '30px', padding: '6px', cursor: 'pointer' }} size='21px'  onClick={handleClr} /> : <Moon style={{ display: 'block', backgroundColor: 'cyan', height: '30px', width: '30px', padding: '6px', cursor: 'pointer' }} size='21px' className='mb-2'  onClick={handleClr} />}  
      
      </div>

    </div>
  );
}

export default App;
