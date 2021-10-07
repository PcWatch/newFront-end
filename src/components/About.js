import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Anthony from '../images/Anthony.jpg';
import Bryce from '../images/Bryce.jpg';
import David from '../images/david.jpg';



class About extends Component {
  render() {
    return (
      <Container className="about-container">
        <Card className="about-card">
        <Card.Header className="about-header">Anthony Morton</Card.Header>
          <Card.Body>
            <Card.Img id="about-image" variant="top" src={Anthony} />
              <Card.Title className="about-title">Github</Card.Title>
              <Card.Text className="about-text" ><a href="https://github.com/anthonylouismorton">github.com/anthonylouismorton</a></Card.Text>
              <Card.Title className="about-title">LinkedIn</Card.Title>
              <Card.Text className="about-text"><a href="https://www.linkedin.com/in/anthony-louis-morton/">linkedin.com/in/anthony-louis-morton/</a></Card.Text>
          </Card.Body>
        </Card>
        <Card className="about-card">
        <Card.Header className="about-header">Bryce Pfingston</Card.Header>
          <Card.Body>
            <Card.Img id="bryce-image" variant="top"src={Bryce} />
              <Card.Title className="about-title">Github</Card.Title>
              <Card.Text className="about-text"><a href="github.com/bpfingston">github.com/bpfingston</a></Card.Text>
              <Card.Title className="about-title">LinkedIn</Card.Title>
              <Card.Text className="about-text"><a href="www.linkedin.com/in/bryce-pfingston/">linkedin.com/in/bryce-pfingston/</a></Card.Text>
          </Card.Body>
        </Card>
        <Card className="about-card">
        <Card.Header className="about-header">David Hecker</Card.Header>
          <Card.Body>
          <Card.Img id="david-image" variant="top"src={David} />
            <Card.Title className="about-title">Github</Card.Title>
            <Card.Text className="about-text"><a href="https://github.com/heckerdavid">github.com/heckerdavid</a></Card.Text>
            <Card.Title className="about-title">LinkedIn</Card.Title>
            <Card.Text className="about-text"><a href="https://www.linkedin.com/in/david-hecker">linkedin.com/in/david-hecker</a></Card.Text>
          </Card.Body>
        </Card>
        {/* <Card className="about-card">
            <Card.Title>David's Roommate</Card.Title>
            <Card.Title>Github</Card.Title>
            <Card.Text></Card.Text>
            <Card.Title>LinkedIn</Card.Title>
            <Card.Text></Card.Text>
        </Card> */}
      </Container>
    );
  }
}
export default withAuth0(About);