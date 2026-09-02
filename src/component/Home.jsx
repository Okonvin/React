import Navbar from './NavBar.jsx'
import Footer from './Footer.jsx'
 import { useEffect } from 'react';
 import { useNavigate } from 'react-router-dom';



function Home(){

      const navigate = useNavigate();
    

        useEffect(() => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/signin'); // Redirect to login page if token does not exist
            }
        }, [navigate]);

    return(
        
        
        <>

        <Navbar/>
           
{/* <!------- search engine and marketing section-------> */}
    <div className="marketing">
         <h1>
            Search engine optimisation & <br/>
            Marketing.
         </h1>
          <p>Simple is a simple template with a 
            creative design that solves all your marketing and SEO queries.
          </p>
          <div className="sec-2-btn">
            <button className="btn-3">Get Started</button>
            <button className="btn-4">Learn More</button>
          </div>
         <img src="https://cloudtopg.netlify.app/assets/banner-Bzk-7Zru.svg" alt=""/>
    </div>
    {/* <!------how does it work section--------> */}
    <section className="section-2">
        <h3>
            How does it works
        </h3>
        <p className="section-2-top">
            One theme that serves as an easy-to-use operational toolkit that meets customer's needs.
        </p>
            <div className="container-3">
                <div className="container-3-col">
                    <img src="https://cloudtopg.netlify.app/assets/Group1-BA-Qdb--.svg" alt=""/>
                    <h2>
                        Speed <br/> Optimization
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                    </p>
                    <button className="gen-btn">Read More</button>
                </div>
                <div className="container-3-col">
                    <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='62px'%20height='62px'%20viewBox='0%200%2062%2062'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3c!--%20Generator:%20Sketch%2055.2%20(78181)%20-%20https://sketchapp.com%20--%3e%3ctitle%3eGroup%207%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cg%20id='Marshmello_landing-page'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Simple_landngpage'%20transform='translate(-677.000000,%20-950.000000)'%3e%3cg%20id='Group-7'%20transform='translate(678.000000,%20951.000000)'%3e%3cpath%20d='M58,54.0215%20C58,56.230625%2056.209125,58.0215%2054,58.0215%20L6,58.0215%20C3.790875,58.0215%202,56.230625%202,54.0215%20L2,53.0215%20C2,52.46925%202.44775,52.0215%203,52.0215%20L22,52.0215%20L22,53.0215%20C22,54.678375%2023.343125,56.0215%2025,56.0215%20L35,56.0215%20C36.656875,56.0215%2038,54.678375%2038,53.0215%20L38,52.0215%20L57,52.0215%20C57.55225,52.0215%2058,52.46925%2058,53.0215%20L58,54.0215%20Z%20M24,52.0215%20L36,52.0215%20L36,53.0215%20C36,53.57375%2035.55225,54.0215%2035,54.0215%20L25,54.0215%20C24.44775,54.0215%2024,53.57375%2024,53.0215%20L24,52.0215%20Z%20M41,21.1325%20L41,17.9625%20C42.082125,17.84075%2043.13275,17.52175%2044.1,17.0215%20L55,17.0215%20C55.568125,17.038875%2056.015125,17.512375%2056.0003728,18.0805%20L56.0003728,50.0215%20L3.99962732,50.0215%20L3.99962732,18.0805%20C3.984875,17.512375%204.432,17.038875%205,17.0215%20L35.9,17.0215%20C36.86725,17.52175%2037.917875,17.84075%2039,17.9625%20L39,29.0215%20L35,29.0215%20C34.44775,29.0215%2034,29.46925%2034,30.0215%20L34,33.0215%20L25,33.0215%20C24.44775,33.0215%2024,33.46925%2024,34.0215%20L24,38.0215%20L15,38.0215%20C14.44775,38.0215%2014,38.46925%2014,39.0215%20L14,46.0215%20L10,46.0215%20L10,48.0215%20L51,48.0215%20L51,46.0215%20L46,46.0215%20L46,30.0215%20C46,29.46925%2045.55225,29.0215%2045,29.0215%20L41,29.0215%20L41,27.0215%20L41,21.1325%20Z%20M16,46.0215%20L24,46.0215%20L24,40.0215%20L16,40.0215%20L16,46.0215%20Z%20M26,46.0215%20L34,46.0215%20L34,35.0215%20L26,35.0215%20L26,46.0215%20Z%20M36,46.0215%20L44,46.0215%20L44,31.0215%20L36,31.0215%20L36,46.0215%20Z%20M40,2.0215%20C43.866,2.0215%2047,5.1555%2047,9.0215%20C47,12.8875%2043.866,16.0215%2040,16.0215%20C36.134,16.0215%2033,12.8875%2033,9.0215%20C33.005,5.1575%2036.136125,2.0265%2040,2.0215%20L40,2.0215%20Z%20M58,50.2055%20L58,18.0805%20C58.014375,16.408125%2056.672375,15.039625%2055,15.0215%20L46.689,15.0215%20C50.0145,11.32725%2049.715625,5.636625%2046.021375,2.311125%20C42.327125,-1.0145%2036.6365,-0.7155%2033.311,2.97875%20C30.229625,6.40175%2030.229625,11.5985%2033.311,15.0215%20L5,15.0215%20C3.327625,15.039625%201.9855,16.408125%202,18.0805%20L2,50.2055%20C0.805625,50.62775%200.00525,51.754625%200,53.0215%20L0,54.0215%20C0.00325,57.333875%202.687625,60.01825%206,60.0215%20L54,60.0215%20C57.312375,60.01825%2059.99675,57.333875%2060,54.0215%20L60,53.0215%20C59.99475,51.754625%2059.194375,50.62775%2058,50.2055%20L58,50.2055%20Z'%20id='Fill-1'%20stroke='%23FFFFFF'%20stroke-width='0.5'%20fill='%23161514'%3e%3c/path%3e%3cpath%20d='M41,12.0215%20L39,12.0215%20C38.44775,12.0215%2038,11.57375%2038,11.0215%20L36,11.0215%20C36,12.678375%2037.343125,14.0215%2039,14.0215%20L39,15.0215%20L41,15.0215%20L41,14.0215%20C42.656875,14.0215%2044,12.678375%2044,11.0215%20C44,9.364625%2042.656875,8.0215%2041,8.0215%20L39,8.0215%20C38.44775,8.0215%2038,7.57375%2038,7.0215%20C38,6.46925%2038.44775,6.0215%2039,6.0215%20L41,6.0215%20C41.55225,6.0215%2042,6.46925%2042,7.0215%20L44,7.0215%20C44,5.364625%2042.656875,4.0215%2041,4.0215%20L40.981,4.0215%20L41,3.0415%20L39,3.0015%20L38.98,4.0215%20C37.323125,4.027%2035.9845,5.374625%2035.9899831,7.0315%20C35.9955,8.688375%2037.343125,10.027%2039,10.0215%20L41,10.0215%20C41.55225,10.0215%2042,10.46925%2042,11.0215%20C42,11.57375%2041.55225,12.0215%2041,12.0215'%20id='Fill-3'%20fill='%23FF3602'%3e%3c/path%3e%3cpath%20d='M11,19.0215%20L7,19.0215%20C6.44775,19.0215%206,19.46925%206,20.0215%20L6,24.0215%20L8,24.0215%20L8,21.0215%20L11,21.0215%20L11,19.0215%20Z'%20id='Fill-5'%20fill='%23006DF0'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt=""/>
                    <h2>
                        Speed <br/> Optimization
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                    </p>
                    <button className="gen-btn">Read More</button>
                </div>
                <div className="container-3-col">
                    <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='62px'%20height='62px'%20viewBox='0%200%2062%2062'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3c!--%20Generator:%20Sketch%2055.2%20(78181)%20-%20https://sketchapp.com%20--%3e%3ctitle%3eGroup%205%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cg%20id='Marshmello_landing-page'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Simple_landngpage'%20transform='translate(-1006.000000,%20-950.000000)'%3e%3cg%20id='Group-5'%20transform='translate(1007.000000,%20951.000000)'%3e%3cpath%20d='M58,54%20C58,56.209125%2056.209125,58%2054,58%20L6,58%20C3.790875,58%202,56.209125%202,54%20L2,53%20C2,52.44775%202.44775,52%203,52%20L22,52%20L22,53%20C22,54.656875%2023.343125,56%2025,56%20L35,56%20C36.656875,56%2038,54.656875%2038,53%20L38,52%20L57,52%20C57.55225,52%2058,52.44775%2058,53%20L58,54%20Z%20M24,52%20L36,52%20L36,53%20C36,53.55225%2035.55225,54%2035,54%20L25,54%20C24.44775,54%2024,53.55225%2024,53%20L24,52%20Z%20M4,19%20C4,18.44775%204.44775,18%205,18%20L14,18%20L14,35%20L7,35%20C6.44775,35%206,35.44775%206,36%20L6,40%20C6.00325,43.312375%208.687625,45.99675%2012,46%20L40,46%20C43.312375,45.99675%2045.99675,43.312375%2046,40%20L46,18%20L55,18%20C55.55225,18%2056,18.44775%2056,19%20L56,50%20L4,50%20L4,19%20Z%20M34,37%20L34,40%20C34.000375,41.478%2034.54925,42.903375%2035.54,44%20L12,44%20C9.790875,44%208,42.209125%208,40%20L8,37%20L34,37%20Z%20M20,2%20L45.54,2%20C44.54925,3.096625%2044.000375,4.522%2044,6%20L44,40%20C44,42.209125%2042.209125,44%2040,44%20C37.790875,44%2036,42.209125%2036,40%20L36,36%20C36,35.44775%2035.55225,35%2035,35%20L16,35%20L16,6%20C16,3.790875%2017.790875,2%2020,2%20L20,2%20Z%20M54,6%20L54,10%20L46,10%20L46,6%20C46,3.790875%2047.790875,2%2050,2%20C52.209125,2%2054,3.790875%2054,6%20L54,6%20Z%20M58,50.184%20L58,19%20C58,17.343125%2056.656875,16%2055,16%20L46,16%20L46,12%20L55,12%20C55.55225,12%2056,11.55225%2056,11%20L56,6%20C55.99675,2.687625%2053.312375,0.00325%2050,0%20L20,0%20C16.687625,0.00325%2014.00325,2.687625%2014,6%20L14,16%20L5,16%20C3.343125,16%202,17.343125%202,19%20L2,50.184%20C0.805625,50.60625%200.00525,51.733125%200,53%20L0,54%20C0.00325,57.312375%202.687625,59.99675%206,60%20L54,60%20C57.312375,59.99675%2059.99675,57.312375%2060,54%20L60,53%20C59.99475,51.733125%2059.194375,50.60625%2058,50.184%20L58,50.184%20Z'%20id='Fill-1'%20stroke='%23FFFFFF'%20stroke-width='0.5'%20fill='%23161514'%3e%3c/path%3e%3cpath%20d='M30,13%20C32.209125,13%2034,14.790875%2034,17%20C34,19.209125%2032.209125,21%2030,21%20C27.790875,21%2026,19.209125%2026,17%20C26,14.790875%2027.790875,13%2030,13%20M30,23%20C33.31375,23%2036,20.31375%2036,17%20C36,13.68625%2033.31375,11%2030,11%20C26.68625,11%2024,13.68625%2024,17%20C24.00325,20.312375%2026.687625,22.99675%2030,23'%20id='Fill-3'%20fill='%23FF5F32'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt=""/>
                    <h2>
                        Speed <br/> Optimization
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                    </p>
                    <button className="gen-btn">Read More</button>
                </div>
            </div>
    </section>
    {/* <!---------- section 4-----------> */}
         <div className="sec-4-main">
              <div className="sec-4-container">
                    <div className="div-1-sec-4">
                        <h3>We Offer a Full Range of Digital Marketing Services!</h3>
                        <p>Lorem ipsum dolor sit amet, tincidunt vestibulum.
                            Fusce egeabus consectetuer turpis, suspendisse.
                        </p>
                            <button className="sec-4-btn">Read More</button>
                    </div>
                    <div className="div-2-sec-4">
                        <img src="https://cloudtopg.netlify.app/assets/Group4-Ca8-D7eP.png" alt=""/>
                    </div>
               </div>
         </div>
         {/* <!--------section 5-------> */}
         <div className="section-5">
            <div className="sec-5-image">
                <img src="https://cloudtopg.netlify.app/assets/Group5-BSA2RbaR.png" alt=""/>
            </div>
            <div className="sec-5-text">
                <h3>Leading Digital Agency for Business Solution.</h3>
                <p> 
                    Power-packed with impressive features and well-optimized, 
                    this template is designed to provide the best performance in all circumstances.
                </p>
                <p>
                    Its smart features make it a powerful stand-alone website building tool.
                </p>
                <button className="sec-5-btn">Read More</button>
            </div>
         </div>

     {/* <!------section 6------> */}
       <section className="sec-6">
        <h2>
             Our case studies
        </h2>
        <p>Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>

        <div className="sec-6-imgs">
            <div className="img-6-div">
                <div className="img-div-1">
                    <img src="https://cloudtopg.netlify.app/assets/Group6-CARfwHGS.svg" alt=""/>
                </div>
                <div>
                    <h2>Online Marketing</h2>
                    <p>Seo Marketing</p>
                </div>
            </div>
            <div className="img-6-div">
                  <div className="img-div-2">
                    <img src="https://cloudtopg.netlify.app/assets/Group7-Ddp9BTrO.svg" alt=""/>
                </div>
                <div>
                    <h2>Web Development</h2>
                    <p>Developing, Designing</p>
                </div>
            </div>
            <div className="img-6-div">
                  <div className="img-div-3">
                    <img src="https://cloudtopg.netlify.app/assets/Group8-1YOXfh2W.svg" alt=""/>
                </div>
                <div>
                    <h2>Web Designing</h2>
                    <p>Designing, Developing</p>
                </div>
            </div>
            <div className="img-6-div">
                  <div className="img-div-4">
                    <img src="https://cloudtopg.netlify.app/assets/Group9-DFum7g60.svg" alt=""/>
                </div>
                <div>
                    <h2>Software Developing</h2>
                    <p>Developing, Designing</p>
                </div>
            </div>
        </div>
        
       </section>
       {/* <!--------section 7--------> */}
       <section className="sec-7">
            <h2>
                What our customers have to say
            </h2>
            <p>Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>

            <div className="sec-7-p-div">
                <div>
                    <img src="https://cloudtopg.netlify.app/assets/face1-COLMlpBM.jpg" alt=""/>
                    <p>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                    </p>
                    <h5>
                        Cody Lambert
                    </h5>
                    <p>Marketing Manager</p>
                </div>
                <div>
                    <img src="https://cloudtopg.netlify.app/assets/face2-CEbzPI9w.jpg" alt=""/>
                    <p>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                    </p>
                    <h5>
                        Cody Lambert
                    </h5>
                    <p>Marketing Manager</p>
                </div>
                <div>
                    <img src="https://cloudtopg.netlify.app/assets/face3-B7Ur1Iuu.jpg" alt=""/>
                    <p>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                    </p>
                    <h5>
                        Cody Lambert
                    </h5>
                    <p>Marketing Manager</p>
                </div>
            </div>
          
       </section>

       
    {/* <!-------section 8---------> */}
    <div className="sec-8">
        <h3>Do you have any projects?<br/>Contact Us</h3>
        <button className="sec-8-btn">Contact Us</button>
    </div>


       <Footer/>
   </>
    )
}

export default Home