import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Col,
  Row,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the hamburger menu open and closed
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    // You can add your search functionality here.
  };

  return (
    <Navbar bg="light" expand="lg" className="pt 4">
      <Container>
        <Row>
          <Col className="col-2">
            <Navbar.Brand href="#home">Purposefuel</Navbar.Brand>
          </Col>
          <Col className="col-3 d-flex align-items-center m-none">
            {/* Search Form */}
            <Form className="d-flex" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form>
          </Col>
          <Col className="col-7 ">
      <div className="d-flex align-items-center justify-content-end pr-5">
     
    
            
      </div>
            
          </Col>
        
        </Row>
      </Container>
    </Navbar>
  );
};
export default Header;
