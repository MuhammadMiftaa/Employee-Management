export default function HomeComponent() {
  return (
    <section
      id="home"
      className="s-home target-section"
      data-parallax="scroll"
      data-natural-width="3000"
      data-natural-height="2000"
      data-position-y="top"
    >
      <div className="shadow-overlay"></div>
      <div className="home-content animate__animated animate__fadeInUp animate__slow">
        <div className="row home-content__main">
          <h1>
            Future Tech. <br />
          </h1>

          <p>We will provide attractive offers and the best services</p>
        </div>{" "}
        {/* end home-content__main */}
      </div>{" "}
      {/* end home-content */}
      <ul className="home-sidelinks animate__animated animate__fadeIn animate__slow animate__delay-1s">
        <li>
          <a className="smoothscroll" href="#about">
            About Us<span>who are we</span>
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#ceo">
            CEO<span>who are our leader</span>
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#footer">
            Contact<span>get in touch</span>
          </a>
        </li>
      </ul>{" "}
      {/* end home-sidelinks */}
      <ul className="home-social">
        <li className="home-social-title">Follow Us</li>
        <li>
          <a href="#0">
            <i className="fab fa-facebook"></i>
            <span className="home-social-text">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#0">
            <i className="fab fa-twitter"></i>
            <span className="home-social-text">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#0">
            <i className="fab fa-linkedin"></i>
            <span className="home-social-text">LinkedIn</span>
          </a>
        </li>
      </ul>{" "}
      {/* end home-social */}
      <a href="#about" className="home-scroll smoothscroll">
        <span className="home-scroll__text">Scroll Down</span>
        <span className="home-scroll__icon"></span>
      </a>{" "}
      {/* end home-scroll */}
    </section>
  );
}
