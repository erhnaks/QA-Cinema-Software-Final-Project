// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from "../Header/Header";


const AboutPage = () => {
return(
<>
   <Header></Header>
   <Navbar></Navbar>
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

  <div>
    {/* Location */}
    International House, 1 St Katharine's Way, London E1W 1UN

  </div> 

</>  

)

}

export default AboutPage;