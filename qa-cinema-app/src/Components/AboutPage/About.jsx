//import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from "../Header/Header";
import "./about.css";


const AboutPage = () => {
return(
<>
   <Header></Header>
   <Navbar></Navbar>

  <div className="container"> 
   <h1>About Us</h1>  

  <div>
      <figure class="text-center">
        <blockquote class="blockquote">
          <p>Take a seat in the clouds at QA Cinema Club, Join us now for an experience you will never forget...</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Team <cite title="Source Title">Foxtrot</cite>
        </figcaption>
      </figure>
  </div>   

  <div>
    {/* General Information about US */}

  </div>

  <div>
    {/* Reviews */}
  </div>  

  <div className="card col-4 p-3" id="qa-location">
    {/* Location */}
    <h3>Where to Find Us</h3>
    International House, 1 St Katharine's Way, London E1W 1UN
    <div>
        <iframe width="400" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=e1w1UN&t=&z=15&ie=UTF8&iwloc=&output=embed" 
        frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='Location'></iframe>
    </div>
  </div> 

  </div>

</>  

)

}

export default AboutPage;