import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
/* CODE HERE */

const Header = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleSignOut = (event) => {
    localStorage.removeItem("loggedInUser");
    {/* CODE HERE */}
  };

  return (
    <header>
      <Navbar
        bg="primary"
        navbar="light"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          {/* CODE HERE */}
            <Navbar.Brand>ECart</Navbar.Brand>
          {/* CODE HERE */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            {loggedInUser && !loggedInUser.isAdmin && (
              
                <Nav.Link>
                  <i className="bi bi-cart"> Cart</i>
                </Nav.Link>
              )}
              
              {loggedInUser && !loggedInUser.isAdmin && (
                
                  <Nav.Link>
                    <i className="bi bi-bag-check-fill"> Orders</i>
                  </Nav.Link>
                
              )}

              {loggedInUser && (
                /* CODE HERE */
                  <Nav.Link>
                    <i className="bi bi-person-badge"> Profile</i>
                  </Nav.Link>
                /* CODE HERE */
              )}

              {loggedInUser && loggedInUser.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  {/* CODE HERE */}
                    <NavDropdown.Item>Users</NavDropdown.Item>
                    {/* CODE HERE */}
                  
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  {/* CODE HERE */}
                  
                    <NavDropdown.Item>Categories</NavDropdown.Item>
                  {/* CODE HERE */}
                  
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  
                </NavDropdown>
              )}

              {!loggedInUser && (
                /* CODE HERE */
                  <Nav.Link>
                    <i className="bi bi-box-arrow-in-right"> Log In</i>
                  </Nav.Link>
                
              )}
              {loggedInUser && (
                /* CODE HERE */
                  <Nav.Link>
                    <i className="bi bi-box-arrow-in-right"> Sign Out</i>
                  </Nav.Link>
                
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
