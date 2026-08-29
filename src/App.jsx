
import {  Routes, Route}from 'react-router-dom'; 
import Home from './component/Home.jsx'
import SignUp from './component/Signup/Signup.jsx';
import Signin from './component/Signin/Signin.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

function App() {
   return ( 
        <>
                <ToastContainer/>
                
                <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/signup' element={<SignUp/>}/>
                        <Route path='/signin' element={<Signin/>}/>

                </Routes>

          </>
      
  );
}

export default App
 