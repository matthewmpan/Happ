import React from 'react';
import HappCrop from '../images/HappCrop.png';

function Footer() {
  return (
    <div className="footer" >
      <img src={HappCrop} alt="HappLogo" className="center" id="happCrop" ></img>
      <h3>MATT PAN</h3>
      <p>Copyright &copy; 2023 HAPP USA, Inc. All rights reserved.</p>
      <p className="footerUnderline" >Terms of Use  |  Privacy Policy</p>
    </div>
  );
}

export default Footer;