import React from "react";
import './footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../../images/footerLogo.png';

export const AppFooterItem1 = () => {
    let name = (
      <div className=' text-center'>
        <img src={Logo} alt='' className=' align-top img-fluid logo' />
      </div>
    );
    let text = 'MCH provides progressive, free health education, accessible on mobile and online for everyone';
  return (
    <>
     <div>{name}</div>
      <footer >
      <p className="name-content text-light align-text-middle" style={{fontSize:15}}>
        {text}
      </p>
      <div className="text-light align-text-middle ">© MCH based on Kabanana Site and Service 2021. All rights reserved</div>
      </footer>
    </>
  );
};