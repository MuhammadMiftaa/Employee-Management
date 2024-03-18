/* eslint-disable no-unused-vars */
import React from "react";

export default function ProfileComponents() {
  return (
    <div id="ceo" className="container-profile">
      <img
        src="ceo.jpg"
        alt=""
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="700"
      />
      <div className="profile">
        <h3
          className="profile-position"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay=""
        >
          — Chief Executive Officer
        </h3>
        <h1
          className="profile-name"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Alex Fergusson
        </h1>
        <p
          className="profile-desc"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nulla
          suscipit consectetur non sapiente dolore veritatis enim ipsa earum
          magni accusamus similique debitis dolorem facere numquam officiis ad
          reiciendis dolor alias unde beatae dignissimos. Quaerat quam, ipsa
          eaque non praesentium corrupti rerum officiis modi quibusdam a, iusto
          minus, delectus necessitatibus?
        </p>
      </div>
    </div>
  );
}
