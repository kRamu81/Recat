import "./signin.css";

function Signin() {
  return (
    <div className="container">
      <h2>Login</h2>

      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Login</button>
      </form>

      <p className="signup">
        Don't have an account? <span>Sign up</span>
      </p>
    </div>
  );
}

export default Signin;
