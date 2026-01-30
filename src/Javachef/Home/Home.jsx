import {Link} from "react-router-dom";
import "./home.css";
import Home1 from "./Home1";
import Home2 from "./home2";


function Home(){
    return(
        <>
        <section className="hero">
            <h1>Find your Best Tutor</h1>
            <p>Struggling with studies? Let the right tutor guide you to success.</p>
            <div class="btn">
                <Link to="/login"><button>join now</button></Link>
                <button>Become a tutor</button>
            </div>
        </section>
        <Home1/>
        <Home2/>
        </>
    )
}
export default Home;