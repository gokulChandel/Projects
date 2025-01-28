// src/Footer.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-white">Home</Nav.Link>
              <Nav.Link href="#shop" className="text-white">Shop</Nav.Link>
              <Nav.Link href="#about" className="text-white">About</Nav.Link>
              <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="text-center">
            <h5>Contact Us</h5>
            <p>Email: info@purposefuel.com</p>
            <p>Phone: +1 234 567 890</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Follow Us</h5>
            <Nav>
              <Nav.Link href="https://facebook.com" target="_blank" className="text-white mx-2">
                <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
              </Nav.Link>
              <Nav.Link href="https://twitter.com" target="_blank" className="text-white mx-2">
                <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
              </Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank" className="text-white mx-2">
                <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
              </Nav.Link>
              <Nav.Link href="https://facebook.com" target="_blank" className="text-white mx-2">
                <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 Purposefuel. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
