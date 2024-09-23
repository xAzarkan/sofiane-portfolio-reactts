import profilePicture from "../../../assets/img/Photo_fianso.png";
import Button from "../../atoms/Button/Button";

const Home = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/sofiane-azarkan/"
                className="home_social-icon"
                target="_blank"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://github.com/xAzarkan"
                className="home_social-icon"
                target="_blank"
              >
                <i className="uil uil-github-alt"></i>
              </a>
            </div>

            <div className="home__img">
              <img
                className="home__blob-img"
                src={profilePicture}
                alt={"profilePicture"}
              />
            </div>

            <div className="home__data">
              <h1 className="home__title">Hi, I am Sofiane</h1>
              <h3 className="home__subtitle">Full-stack developer</h3>
              <p className="home__description">
                Young full-stack developer with a passion for coding and always
                looking to improve his skills.
              </p>
              <Button
                label="Contact me"
                iconClassName="uil uil-message button__icon"
                goTo="#contact"
              />
            </div>
          </div>

          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <i className="uil uil-mouse-alt home__scroll-mouse"></i>
              <span className="home__scroll-name">Scroll down</span>
              <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
