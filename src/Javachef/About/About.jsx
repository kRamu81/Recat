import "./about.css";
import AboutImage from "../Assets/about.png";
import About1 from "./about1";

function About(){
    return(
        <>
        <section className="about-section">
            <div className="about-container">
                <div className="about-image">
                    <img src={AboutImage} alt="About JavaChef" />
                </div>
                <div className="About-content">
                    <h2>About us</h2>
                    <p>JavaChef is a learning platform created to help students understand programming in a simple and practical way. We believe coding should be 
                        learned step by step, just like cooking a perfect recipe.</p>

                    <p>JavaChef is a learning platform created to help students understand programming in a simple and practical way. We believe coding should be 
                        learned step by step, just like cooking a perfect recipe.</p>
                </div>
            </div>
        </section>
        <About1/>

        </>
    )
}

export default About;