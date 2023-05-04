import React from 'react';

const footerStyle = {
  backgroundColor: '#f8f8f8',
  color: '#333',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <h1>Contact Us for any inquiries</h1>
        <p>matha@petstore.com</p>
        <p>---------------------</p>
        
      </div>
      <p>
        provided by <a href='https://dog.ceo/dog-api/'>Dog API</a>{' '}
      </p>
      <footer style={footerStyle}>
        <p>Copyright © 2023</p>
      </footer>
    </footer>
  );
}

export default Footer;
