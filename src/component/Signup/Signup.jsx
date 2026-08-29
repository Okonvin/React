import  "./Signup.css";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"



 


function SignUp () {

    const navigate = useNavigate()
    const  [formData, setFormData] = useState({
      fullname: '',
      email: '',
      password: ''
    })

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        await axios.post('https://cloudtopg-auth-api-service.onrender.com/auth/signup', formData)
        toast.success('user signup successfully')
        setTimeout( () =>{
          navigate('/signin')
        }, 5000)
        console.log('user signup successfully')
      } catch(error){
        toast.error('Error signing up: ' + error)
        console.error('Error signing up:', error)
      }
    }

    
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
                  <form className="form-field" onSubmit={handleSubmit}>
                    <div className="form-div">
                      <div className="input-field">
                        <i className="fa-regular fa-user"></i>
                        <input 
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        id="fullname"
                        onChange={handleChange}
                        autoComplete="fullname"
                        placeholder="Full Name" required/>
                      </div>

                      <div className="input-field">
                        <i className="fa-regular fa-envelope"></i>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        id="email"
                        onChange={handleChange}
                        autoComplete="email"
                        placeholder="Email" required/>
                      </div>

                      <div className="input-field">
                        <i className="fa-solid fa-lock"></i>
                        <input 
                        type="password" 
                        name="password" 
                        value={formData.password}
                        id="password"
                        onChange={handleChange}
                        autoComplete="new-password"
                        placeholder="Password" required/>
                      </div>

                      <div className="signup-btn">
                        <button type="submit">Sign Up</button>
                        <p>Existing User? <Link to="/Signin">Login</Link></p>
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