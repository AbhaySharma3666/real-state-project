import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await apiRequest.post("/auth/login", formData);
      updateUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="form-header">
            <h1>Welcome Back</h1>
            <p>Sign in to continue your journey</p>
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
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={isLoading} className={isLoading ? 'loading' : ''}>
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>

          <div className="form-footer">
            <p>Don't have an account?</p>
            <Link to="/register">Create Account</Link>
          </div>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
        <div className="overlay">
          <h2>Find Your Dream Home</h2>
          <p>Join our community of real estate enthusiasts</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
