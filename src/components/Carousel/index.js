import React from 'react';
import './carousel.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container, Row, Col} from 'react-bootstrap';
export const AppCarousel = () =>{
    return (
      <>
        <Carousel
          nextIcon=''
          nextLabel=''
          prevIcon=''
          prevLabel=''
          className=''
        >
          <Carousel.Item>
            <Container>
              <Row className='justify-content-md-center'>
                <Col md='auto' className='boxContent'>
                  <div className='Contenttext'>
                    <p className='title'>Welcom To My Community Health</p>
                    <p className='text'>
                      Based on kabanana site and service
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <Row className='justify-content-md-center'>
                <Col md='auto' className='boxContent'>
                  <div className='Contenttext'>
                    <p className='title'>Health Beyond Barriers</p>
                    <p className='text'>
                      Get your health tips anywhere in Zambia at anytime
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row className='justify-content-md-center'>
                <Col md='auto' className='boxContent'>
                  <div className='Contenttext'>
                    <p className='title'>Health Tips</p>
                    <p className='text'>
                      Get your health news at your finger tips
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row className='justify-content-md-center'>
                <Col md='auto' className='boxContent'>
                  <div className='Contenttext'>
                    <p className='title'>You Matter</p>
                    <p className='text'>
                      Your health is of great importance to us
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </>
    );
}