import "./signup.css";
import {Link} from "react-router-dom";


function Signup(){
    return(
        <>
        <div className="container">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Name" required/>
                <input type="Email" placeholder="Your email here" required/>
                <input type="Password" placeholder="password" required/>
                <Link to='/login'><button>Register</button></Link>
            </form>
            <p className="signup">Already have Account?
                <Link to='/login'><span>Login here</span></Link>
            </p>
        </div>
        </>
    )
}
export default Signup;