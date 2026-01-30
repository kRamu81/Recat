import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <>
        
        <nav>
            <div className="logo">RecapNote</div>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        
        </ul>
      </nav>
        </>
    )
}

export default Navbar;