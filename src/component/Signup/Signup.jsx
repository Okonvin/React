import  "./Signup.css";
import { Link } from 'react-router-dom'


function SignUp () {
    return(
        <>

        
  <div className="main-container">
    {/* <!-- Header --> */}
    <div className="container-1">
      <Link to="/">
        <h2>Cloudtop G</h2>
      </Link>
      <h2>
        Existing User? <Link to="/Signin">Login</Link>
      </h2>
    </div>

   {/*  <!-- Registration Form Section -->  */}
    <div className="form-box">
      <div className="img-container">
        <img src="https://cloudtopg.netlify.app/assets/login_pic-ju_59Ozl.png" alt="Login illustration"/>
      </div>

      <div className="form-container">
        <h1>User Registration</h1>
        <form className="form-field">
          <div className="form-div">
            <div className="input-field">
              <i className="fa-regular fa-user"></i>
              <input type="text" name="fullname" placeholder="Full Name" required/>
            </div>

            <div className="input-field">
              <i className="fa-regular fa-envelope"></i>
              <input type="email" name="email" placeholder="Email" required/>
            </div>

            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" name="password" placeholder="Password" required/>
            </div>

            <div className="signup-btn">
              <button type="submit">Sign Up</button>
              <p>Existing User? <a href="/Login_page/index.html">Login</a></p>
            </div>

            <div className="logos">
              <p>Signup with</p>
              <div>
                <img src="https://cloudtopg.netlify.app/assets/google-m1QL4cL7.png" alt="Google login"/>
              </div>
              <div>
                <img src="https://cloudtopg.netlify.app/assets/facebook-DSbeQHlm.png" alt="Facebook login"/>
              </div>
              <div>
                <img src="https://cloudtopg.netlify.app/assets/twitter.png" alt="Twitter login"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

        
        </>
    )

}

export default SignUp