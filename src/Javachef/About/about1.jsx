import "./about1.css";
import image1 from "../Assets/html.png";
import image2 from "../Assets/css.png";
import image3 from "../Assets/javascript.png";

function About1() {
  return (
    <>
      <h1>Our Notes Available</h1>

      <div className="cards">
        <div className="card">
          <img src={image1} alt="photo1" />
          <h1>HTML</h1>
          <p>
            Hyper text markup language Lorem ipsum,
            dolor sit amet consectetur adipisicing elit.
            Fugit, beatae.
          </p>
        </div>

        <div className="card">
          <img src={image2} alt="photo1" />
          <h1>CSS</h1>
          <p>
            Cascading style sheets Lorem ipsum,
            dolor sit amet consectetur adipisicing elit.
            Fugit, beatae.
          </p>
        </div>

        <div className="card">
          <img src={image3} alt="photo1" />
          <h1>JavaScript</h1>
          <p>
            JavaScript basics Lorem ipsum,
            dolor sit amet consectetur adipisicing elit.
            Fugit, beatae.
          </p>
        </div>
      </div>
    </>
  );
}

export default About1;
