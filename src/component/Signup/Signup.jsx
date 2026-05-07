
import Signup from './Signup/SignUp.css'




function SignUp () {
    return(
        <>

        <body>
  <div class="main-container">
    {/* <!-- Header --> */}
    <div class="container-1">
      <a href="/">
        <h2>Cloudtop G</h2>
      </a>
      <h2>
        Existing User? <a href="/Login_page/index.html">Login</a>
      </h2>
    </div>

    {/* <!-- Registration Form Section --> */}
    <div class="form-box">
      <div class="img-container">
        <img src="https://cloudtopg.netlify.app/assets/login_pic-ju_59Ozl.png" alt="Login illustration"/>
      </div>

      <div class="form-container">
        <h1>User Registration</h1>
        <form class="form-field">
          <div class="form-div">
            <div class="input-field">
              <i class="fa-regular fa-user"></i>
              <input type="text" name="fullname" placeholder="Full Name" required/>
            </div>

            <div class="input-field">
              <i class="fa-regular fa-envelope"></i>
              <input type="email" name="email" placeholder="Email" required/>
            </div>

            <div class="input-field">
              <i class="fa-solid fa-lock"></i>
              <input type="password" name="password" placeholder="Password" required/>
            </div>

            <div class="signup-btn">
              <button type="submit">Sign Up</button>
              <p>Existing User? <a href="/Login_page/index.html">Login</a></p>
            </div>

            <div class="logos">
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
</body>
        
        </>
    )

}

export default SignUp