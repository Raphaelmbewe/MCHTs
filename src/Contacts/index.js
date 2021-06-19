import React from 'react';
import { Navigation } from '../components/Navigations';
import { AppFooter } from '../components/Footer';
import { Form } from '../components/Form'
import './contacts.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contacts = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className='App-contacts'>
      <Navigation />

      <div data-aos='fade-up'>
        {' '}
        <Form />
      </div>
      <div data-aos='zoom-in'>
        {' '}
        <AppFooter />
      </div>
    </div>
  );
};
