/* eslint-disable no-unused-vars */
import React from "react";
import Card from "react-bootstrap/Card";

export default function InnovativeComponents() {
  return (
    <div className="container-inno">
      <h1 data-aos="fade-right" data-aos-duration="700">
        – Innovative Components
      </h1>
      <div className="cards">
        <Card
          className="card-innovation"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay=""
        >
          <Card.Body>
            <Card.Title className="card-num">01</Card.Title>
            <Card.Title className="card-title">
              Best Development Methodologies
            </Card.Title>
            <Card.Text className="card-text">
              We implement the best development methodologies, such as Agile or
              DevOps, to ensure efficiency and high quality in every stage of
              software development.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="card-innovation"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <Card.Body>
            <Card.Title className="card-num">02</Card.Title>
            <Card.Title className="card-title">
              Flexibility and Scalability
            </Card.Title>
            <Card.Text className="card-text">
              Our products are designed with the principles of flexibility and
              scalability, allowing them to be customized to the evolving needs
              of businesses and to handle company growth.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="card-innovation"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <Card.Body>
            <Card.Title className="card-num">03</Card.Title>
            <Card.Title className="card-title">
              Continuous Innovation
            </Card.Title>
            <Card.Text className="card-text">
              We continually research and develop to introduce new innovative
              features in our products. We are committed to being leaders in the
              industry by continuously innovating.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="card-innovation"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <Card.Body>
            <Card.Title className="card-num">04</Card.Title>
            <Card.Title className="card-title">
              Strategic Partnerships and Collaborations
            </Card.Title>
            <Card.Text className="card-text">
              We build strategic partnerships with clients and business partners
              to create better solutions together. Collaboration is the key to
              our success.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
