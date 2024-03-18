/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AdvantagesComponents() {
  return (
    <Container id="about" className="container-adv" fluid>
      <Row>
        <Col
          className="column"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay=""
        >
          <div className="cell d-flex gap-5 align-items-start">
            <h3 className="mt-2 fs-4">01</h3>
            <div className="cell-text">
              <h1 className="mb-4">Quality and Customer Satisfaction</h1>
              <p className="ps-1">
                We are committed to delivering high-quality software solutions
                that meet the needs of our customers. Customer satisfaction is
                our top priority.
              </p>
            </div>
          </div>
        </Col>
        <Col
          className="column"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="cell d-flex gap-5 align-items-start">
            <h3 className="mt-2 fs-4">02</h3>
            <div className="cell-text">
              <h1 className="mb-4">Cutting-Edge and Innovative Technology</h1>
              <p className="ps-1">
                We adopt the latest and innovative technologies in software
                development to ensure our products are always at the forefront
                of the industry.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          className="column"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay=""
        >
          <div className="cell d-flex gap-5 align-items-start">
            <h3 className="mt-2 fs-4">03</h3>
            <div className="cell-text">
              <h1 className="mb-4">Expert Software Development Team</h1>
              <p className="ps-1">
                Our team consists of experienced experts in software
                development. They have in-depth knowledge in various
                technologies and the latest development methodologies.
              </p>
            </div>
          </div>
        </Col>
        <Col
          className="column"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="cell d-flex gap-5 align-items-start">
            <h3 className="mt-2 fs-4">04</h3>
            <div className="cell-text">
              <h1 className="mb-4">Customized Solutions for Client Needs</h1>
              <p className="ps-1">
              We provide tailored software solutions to meet the specific needs of our clients. Our flexible approach allows us to adapt to the unique requirements of each project.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
