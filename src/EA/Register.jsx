function Register(){
    return(
        <>
        <div>
            <form>
                <h1>Register here</h1>

                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter your name" required/>
                </div>

                <div>
                    <label>Email:</label>
                    <input type="Email" placeholder="Enter your email" required/>
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password" required/>
                </div>

            </form>
        </div>
        </>
    )
}
export default Register;