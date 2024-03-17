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
            <Card.Title className="card-title">Card Title</Card.Title>
            <Card.Text className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              voluptates repellat tempora obcaecati, quisquam veritatis
              similique dolorem iste fugiat quae!
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
            <Card.Title className="card-title">Card Title</Card.Title>
            <Card.Text className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              voluptates repellat tempora obcaecati, quisquam veritatis
              similique dolorem iste fugiat quae!
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
            <Card.Title className="card-title">Card Title</Card.Title>
            <Card.Text className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              voluptates repellat tempora obcaecati, quisquam veritatis
              similique dolorem iste fugiat quae!
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
            <Card.Title className="card-title">Card Title</Card.Title>
            <Card.Text className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              voluptates repellat tempora obcaecati, quisquam veritatis
              similique dolorem iste fugiat quae!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
