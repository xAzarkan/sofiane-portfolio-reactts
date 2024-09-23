import picture from "../../../assets/img/photo_fiansoo.jpg";
import pdf from "../../../assets/pdf/CV_SOFIANE_AZARKAN.pdf";
import Button from "../../atoms/Button/Button";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
          <img src={picture} alt={"picture"} className="about__img" />

          <div className="about__data">
            <p className="about__description">
              Sofiane Azarkan, 20 years old. I am currently a student in my 3rd
              year of Bachelor in Business Computing at the HELB Ilya Prigogine
              in Brussels. There I learn to code using languages such as Java,
              C#, HTML, CSS, Javascript and many others.
            </p>

            <div className="about__info">
              <div>
                <span className="about__info-title">02+</span>
                <span className="about__info-name">
                  Years <br /> experience (school)
                </span>
              </div>

              <div>
                <span className="about__info-title">06+</span>
                <span className="about__info-name">
                  Completed <br /> project
                </span>
              </div>
            </div>

            <div className="about__buttons">
              <Button
                label="Download CV"
                goTo={pdf}
                isDownload={true}
                iconClassName={"uil uil-download-alt button__icon"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
