 import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://cloudtopg-auth-api-service.onrender.com/auth/signin', formData)
      toast.success('Logged in successfully')
      navigate('/')
    } catch (error) {
      toast.error('Error logging in: ' + error)
      console.error('Error logging in:', error)
    }
  }

  return (
    <>
      <div className="main-container">
        <div className="header-div">
          <Link to="/">
            <h2>CloudtopG</h2>
          </Link>
          <h2>
            New User? <Link to="/signup">SignUp</Link>
          </h2>
        </div>

        <div className="main-div">
          <div className="img-div">
            <img src="https://cloudtopg.netlify.app/assets/login_pic-ju_59Ozl.png" alt="" />
          </div>

          <div className="form-div">
            <h1>Welcome Back!</h1>
            <p>Login to continue</p>
            <form className="form-box2" onSubmit={handleSubmit}>
              <div className="input-feild">
                <i className="fa-regular fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-feild">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="login-btn">
                <button type="submit">Login</button>
                <p>FORGET PASSWORD?</p>
              </div>

              <div className="logos">
                <p>Login with</p>
                <div>
                  <img src="https://cloudtopg.netlify.app/assets/google-m1QL4cL7.png" alt="Google Login" />
                </div>
                <div>
                  <img src="https://cloudtopg.netlify.app/assets/facebook-DSbeQHlm.png" alt="Facebook Login" />
                </div>
                <div>
                  <img src="data:image/png;base64,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" alt="Twitter Login" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;