import React from 'react';
import './customer.css'; // Import your CSS file for styling

const LogisticPartnerSection = () => {
  const redirectToWebsite = () => {
    window.open('https://www.ahirtrans.com', '_blank');
  };

  return (
    <section className="logistic-partner-section">
      <h1 className='log'>Logistic Partner</h1>
      <div className="partner-images">
        <div className="partner-image-container" onClick={redirectToWebsite}>
          <img src="../../asset/AE.png" alt="Partner 1" />
        </div>
        <div className="partner-image-container" onClick={redirectToWebsite}>
          <img src="../../asset/ATL.png" alt="Partner 2" />
        </div>
      </div>
    </section>
  );
};

export default LogisticPartnerSection;
