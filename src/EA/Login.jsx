import React from "react"
import {Link} from "react-router-dom"

export default function Login(){
    return(
        <>
        <form>
            <div>
            <label htmlFor="">Email:</label>
            <input type="email" placeholder="Enter your email" />
            </div>

            <div>
            <label htmlFor="">password</label>
            <input type="password" placeholder="Enter your email" />
            </div>
            <Link to="/home" ><button>Login</button></Link>
            
            <Link to="/register"><button>Register here</button></Link>
        </form>
        </>
    )
}