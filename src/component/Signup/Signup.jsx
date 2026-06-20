import  "../Signup/Signup.css";
import { Link } from 'react-router-dom'


function SignUp () {
    return(
        <>

        
  <div ClassName="main-container">
    {/* <!-- Header --> */}
    <div ClassName="container-1">
      <Link to="/">
        <h2>Cloudtop G</h2>
      </Link>
      <h2>
        Existing User? <a href="/Login_page/index.html">Login</a>
      </h2>
    </div>

   {/*  <!-- Registration Form Section -->  */}
    <div ClassName="form-box">
      <div ClassName="img-container">
        <img src="https://cloudtopg.netlify.app/assets/login_pic-ju_59Ozl.png" alt="Login illustration"/>
      </div>

      <div ClassName="form-container">
        <h1>User Registration</h1>
        <form ClassName="form-field">
          <div ClassName="form-div">
            <div ClassName="input-field">
              <i ClassName="fa-regular fa-user"></i>
              <input type="text" name="fullname" placeholder="Full Name" required/>
            </div>

            <div ClassName="input-field">
              <i ClassName="fa-regular fa-envelope"></i>
              <input type="email" name="email" placeholder="Email" required/>
            </div>

            <div ClassName="input-field">
              <i ClassName="fa-solid fa-lock"></i>
              <input type="password" name="password" placeholder="Password" required/>
            </div>

            <div ClassName="signup-btn">
              <button type="submit">Sign Up</button>
              <p>Existing User? <a href="/Login_page/index.html">Login</a></p>
            </div>

            <div ClassName="logos">
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