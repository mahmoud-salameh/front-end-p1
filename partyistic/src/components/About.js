import React from 'react';
import {
  Card,
  Container,
  Row,
  Col,

} from 'react-bootstrap';
import './css/about-us.css';

import github from './img/github.png';
import linkedin from './img/in.png';
import mail from './img/mail.png';
import laith2 from './img/laith2.jpg';
import mahmood from './img/mahmood.jpg';
import firas from './img/firas.jpg';
import yahia from './img/yahia.jpg';
import nora from './img/nora.png';
import ruba from './img/ruba.jpg';

export default function About() {
  return (
    <div className="bodyDiv">
      <h3 className="h2class">Partyistic-Team</h3>
      <Container fluid="md">
        <Row className=" justify-content-center">


          <Col sm={6} lg={4}>
            <Card style={{ width: '18rem' }} className="cardAboutus">
              <Card.Img src={yahia} alt="" className="cardimg" />
              <Card.Body>
                <Card.Title>Yahia Al-Qous</Card.Title>
                <Card.Text>
                  Architect attended to be a front-end developer
                </Card.Text>
                <div className="aboutus-icon">
                  <a href="https://github.com/YAHIAQOUS">
                    <img src={github} alt="" width="30px" height="30px" />
                  </a>
                  <a href="https://www.linkedin.com/in/yahiaqous/">
                    <img src={linkedin} alt="" width="30px" height="30px" />
                  </a>
                  <a href="mailto:yahiaqous@gmail.com">
                    <img src={mail} alt="" width="30px" height="30px" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col sm={6} lg={4}>
            <Card style={{ width: '18rem' }} className="cardAboutus">
              <Card.Img src={laith2} alt="" className="cardimg" />
              <Card.Body>
                <Card.Title>Laith Hussein</Card.Title>
                <Card.Text>
                  Full stack web deveolper
                </Card.Text>
                <div className="aboutus-icon">
                  <a href="https://github.com/laithfayizhussein">
                    <img src={github} alt="" width="30px" height="30px" />
                  </a>
                  <a href="https://www.linkedin.com/in/laith-hussien/">
                    <img src={linkedin} alt="" width="30px" height="30px" />
                  </a>
                  <a href="laithalsanory9919@gmail.com">
                    <img src={mail} alt="" width="30px" height="30px" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col sm={6} lg={4}>
            <Card style={{ width: '18rem' }} className="cardAboutus">
              <Card.Img src={mahmood} alt="" className="cardimg" />
              <Card.Body>
                <Card.Title>Mahmoud Salameh</Card.Title>
                <Card.Text>
                  mmmmmmmmmmmmmmmmmmmmm
                </Card.Text>
                <div className="aboutus-icon">
                  <a href="https://github.com/mahmoud-salameh">
                    <img src={github} alt="" width="30px" height="30px" />
                  </a>
                  <a href="https://www.linkedin.com/in/mahmoud-slamah-1050a319a/">
                    <img src={linkedin} alt="" width="30px" height="30px" />
                  </a>
                  <a href="mahmoud4561@hotmail.com">
                    <img src={mail} alt="" width="30px" height="30px" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} lg={4}>
            <Card style={{ width: '18rem' }} className="cardAboutus">
              <Card.Img src={firas} alt="" className="cardimg" />
              <Card.Body>
                <Card.Title>Firas Hasan</Card.Title>
                <Card.Text>
                  fffffffffffffffff
                </Card.Text>
                <div className="aboutus-icon">
                  <a href="https://github.com/FirasHasan">
                    <img src={github} alt="" width="30px" height="30px" />
                  </a>
                  <a href="https://www.linkedin.com/in/firas-hasan">
                    <img src={linkedin} alt="" width="30px" height="30px" />
                  </a>
                  <a href="x.firashasan@gmail.com">
                    <img src={mail} alt="" width="30px" height="30px" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col sm={6} lg={4}>
            <Card style={{ width: '18rem' }} className="cardAboutus">
              <Card.Img src={nora} alt="" className="cardimg" />

              <Card.Body>
                <Card.Title>Nura Tabanjeh</Card.Title>
                <Card.Text>
                  nnnnnnnnnnnnnnnnnnnn
                </Card.Text>
                <div className="aboutus-icon">
                  <a href="https://github.com/nuratabanjeh">
                    <img src={github} alt="" width="30px" height="30px" />
                  </a>
                  <a href="https://www.linkedin.com/in/nura-tabanjeh-0237391b9/">
                    <img src={linkedin} alt="" width="30px" height="30px" />
                  </a>
                  <a href="nuratabanjeh96@gmail.com">
                    <img src={mail} alt="" width="30px" height="30px" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col sm={6} lg={4}>
            <Card style={{ width: '18rem' }} className="cardAboutus">
              <Card.Img src={ruba} alt="" className="cardimg" />

              <Card.Body>
                <Card.Title>Ruba kanaan</Card.Title>
                <Card.Text>
                  rrrrrrrrrrrrrrrrrrrrr
                </Card.Text>
                <div className="aboutus-icon">
                  <a href="https://github.com/rubakanaan">
                    <img src={github} alt="" width="30px" height="30px" />
                  </a>
                  <a href="www.linkedin.com/in/ruba-kanaan">
                    <img src={linkedin} alt="" width="30px" height="30px" />
                  </a>
                  <a href="rubajkanaan@gmail.com">
                    <img src={mail} alt="" width="30px" height="30px" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}


