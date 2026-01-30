import "./contact.css";
import image from "../Assets/contact.png";

function Contact(){
    return(
        <>
           <section className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                   <h2>Contact Us</h2>

                   <p><strong>Email:</strong> info@company.com</p>
                   <p><strong>Phone:</strong> +91 98765 43210</p>
                   <p><strong>Address:</strong> Bangalore, India</p>
                </div>

                <div className="contact-image">
                <img src={image} alt="Contact" />
                </div>

           </div>
        </section>

        </>
    )
}

export default Contact;