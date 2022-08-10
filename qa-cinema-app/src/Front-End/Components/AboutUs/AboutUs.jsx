// import "../AboutPage/AboutUs.css";
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from 'react-bootstrap/Card';

const AboutUs = () => {
  return (
    <>
    <React.Fragment>
    <Header></Header>
    <br></br>
    <br></br>
    <div className='container'>
    <div class='cards'>
    <div className id="col-md-4">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title id="AboutUs-title">
          <h4>Billy M</h4></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Product Owner</Card.Subtitle>
        <Card.Text>
         <p>I am a repo destroyer sent from the future to kill github</p>
        </Card.Text>
        <Card.Link href="https://github.com/BillyMillsGitHub" target="_blank">GitHub Account</Card.Link>
        <Card.Link href="http://localhost:3027" target="_blank">Contact Us</Card.Link>
      </Card.Body>
    </Card>
<br></br>
</div>


    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title id="AboutUs-title">
          <h4>Erhan A</h4></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Development Team</Card.Subtitle>
        <Card.Text>
          <p>Erhan enjoys cooking, driving and coding...</p>
        </Card.Text>
        <Card.Link href="https://github.com/erhnaks" target="_blank">GitHub Account</Card.Link>
        <Card.Link href="http://localhost:3027" target="_blank">Contact Us</Card.Link>
      </Card.Body>
    </Card>
    <br></br>


    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title id="AboutUs-title">
          <h4>Muhammad R</h4></Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Development Team</Card.Subtitle>
        <Card.Text>
          <p>Muhammad enjoys football and could have made it to the big leagues if he hadn't of torn his ACL.</p>
        </Card.Text>
        <Card.Link href="https://github.com/MuhammadShayekurRahman" target="_blank">GitHub Account</Card.Link>
        <Card.Link href="http://localhost:3027" target="_blank">Contact Us</Card.Link>
      </Card.Body>
    </Card>
    <br></br>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title id="AboutUs-title">
          <h4>Omar M</h4></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Scrum Master</Card.Subtitle>
        <Card.Text>
          <p>Omar enjoys computer gaming, bowling and trips to the cinema.</p>
        </Card.Text>
        <Card.Link href="https://github.com/OmarMalikGithub" target="_blank">GitHub Account</Card.Link>
        <Card.Link href="http://localhost:3027" target="_blank">Contact Us</Card.Link>
      </Card.Body>
    </Card>
    <br></br>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title id="AboutUs-title">
          <h4>Shakir A</h4></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Development Team</Card.Subtitle>
        <Card.Text>
        <p>Shakir enjoys football and made it to the big leagues because he didn't tear his ACL.</p>
        </Card.Text>
        <Card.Link href="https://github.com/shakir-ali-Github" target="_blank">GitHub Account</Card.Link>
        <Card.Link href="http://localhost:3027" target="_blank">Contact Us</Card.Link>
      </Card.Body>
    </Card>
    <br></br>
    <br></br>
    </div>
    </div>
<Footer></Footer>
</React.Fragment>
    </>
  );
}

export default AboutUs;
