import { useState } from "react";
import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../dist/css/main.css";

export default function HeaderComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Add this useEffect
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (show && e.target.closest(".slide-menu").length === 0) {
        setShow(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [show]);

  return (
    <header className="s-header">
      <Offcanvas
        className="slide-menu bg-black"
        show={show}
        onHide={handleClose}
        backdrop={false}
        placement="end"
        name={"end"}
        style={{ width: "20%" }}
      >
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          className="header-title bg-black"
        >
          <Offcanvas.Title className="bg-black">
            <h5 className="slide-title animate__animated animate__fadeIn animate__slower animate__delay-2s">
              Menu
            </h5>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="header-body bg-black">
          <ul className="header-content-list animate__animated animate__fadeInRight animate__slow">
            <li>
              <a href="#home" title="home">
                Home
              </a>
            </li>
            <li>
              <a href="#about" title="about">
                About us
              </a>
            </li>
            <li>
              <a href="#ceo" title="services">
                Our CEO
              </a>
            </li>
            <li>
              <a href="#footer" title="contact">
                Contact
              </a>
            </li>
            <li>
              <a href="/" title="login">
                Login
              </a>
            </li>
          </ul>
          <ul className="header-content-social animate__animated animate__fadeInUp animate__slow animate__delay-1s">
            <li>
              <a href="#0">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <a className="header-menu-toggle" onClick={handleShow} href="#">
        <span className="header-menu-icon"></span>
      </a>
    </header>
  );
}
