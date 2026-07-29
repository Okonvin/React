
import {  Routes, Route}from 'react-router-dom'; 
import Home from './component/Home.jsx'
// import Footer from './component/Footer.jsx'
// import Navbar from './component/NavBar.jsx'
// import './App.css'
import SignUp from './component/Signup/Signup.jsx';
import Signin from './component/Signin/Signin.jsx'
 

function App() {
   return ( 
        <>
                {/* <Navbar/> */}
                

                <Routes>

                        
                        <Route path='/' element={<Home/>}/>
                        <Route path='/signup' element={<SignUp/>}/>
                        <Route path='/signin' element={<Signin/>}/>

                </Routes>

                {/* <Footer/> */}

          </>
      
  );
}

export default App
 