import React from 'react';
import { videos } from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './video.css';

export const Video = () => {
  return (
    <>
      { videos.map((card) => {
        const { id, link } = card;
        return (
          <Container fluid key={id} className='video '>
            <div>
              <iframe
                src={link}
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className='videoIframe'
              ></iframe>
            </div>
          </Container>
        );
      })}
    </>
  );
};
