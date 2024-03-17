/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarComponents() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika pengguna telah menggulir sejauh 100 piksel dari atas
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   const navbar = {
  //     color: "red",
  //     fontSize: "16px",
  //     backgroundColor: "gold",
  //     padding: "10px",
  //   };

  return (
    // <div className={scrolled ? "navbar scrolled" : "navbar"}>
    <Navbar data-bs-theme="light" className="navBar sticky-top p-4" >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="logo.png"
            width="30"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand className="nav-brand fs-3" href="#home">
          Future Tech
        </Navbar.Brand>
        <Nav className="me-auto nav-list">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About us</Nav.Link>
          <Nav.Link href="#ceo">CEO</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="sign-in text-decoration-none">
            Signed in as:{" "}
            <a className="text-decoration-none" href="#login">
              Guest | Login
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </div>
  );
}
