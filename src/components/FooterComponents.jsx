/* eslint-disable no-unused-vars */
import React from "react";

export default function FooterComponents() {
  return (
    <div id="footer" className="container-footer">
      <div className="company">
        <div className="company-desc">
          <h3>Future Tech</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            voluptatem quisquam cum voluptatum quia expedita. Quidem,
            repellendus esse libero nihil fuga explicabo aliquam sed delectus?
            Quaerat quasi excepturi illo? Recusandae?
          </p>
        </div>
        <img src="logo.png" alt="" />
        <div className="company-info">
          <h3 className="address">Address</h3>
          <h4 className="address">Jl. Ketintang Surabaya</h4>
          <h3 className="email">Email</h3>
          <h4 className="email">sample@yahoo.com</h4>
          <h3 className="number">Phone Number</h3>
          <h4 className="number">+62 821-7777-7777</h4>
        </div>
      </div>
      <hr />

      <div className="footer">
        <h5 className="copyright">2024 Future Tech. All right reserved.</h5>
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
      </div>
    </div>
  );
}
