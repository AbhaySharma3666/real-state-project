import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="form-header">
            <h1>Create Account</h1>
            <p>Join our community today!</p>
          </div>
          
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              required
              minLength={3}
              maxLength={20}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              required
              minLength={6}
            />
          </div>

          <button className="submit-btn" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>

          {error && <div className="error-message">{error}</div>}

          <div className="form-footer">
            <p>Already have an account?</p>
            <Link to="/login" className="login-link">Sign In</Link>
          </div>
        </form>
      </div>
      <div className="imgContainer">
        <div className="overlay"></div>
        <img src="/bg.png" alt="Real Estate Background" />
        <div className="content">
          <h2>Find Your Dream Home</h2>
          <p>Join thousands of satisfied customers who found their perfect property with us.</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
