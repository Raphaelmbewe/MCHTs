import React from 'react';
import { Video } from './video';
import './video.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const VidoesDisplay = () => {
  return (
    <Container fluid>
      <div className='videoDisplay'></div>
      <section className='container'>
        <div className='cardListVidoes container'>
          <Video />
        </div>
      </section>
    </Container>
  );
};
