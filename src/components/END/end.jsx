import "./end.css";

function END() {
  return (
    <div className="end-container">
      <div className="map-container">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.912020269977!2d70.12786108902101!3d23.06368686103154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b9ed4ce07c59%3A0x3c241ea92453324b!2s101%2C%20Sector%208%2C%20Gandhidham%2C%20Gujarat%20370203!5e0!3m2!1sen!2sin!4v1714786194755!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      <footer>
        <span className="logos">
          <img src="/asset/logo.png" className="navLogos" alt="lo" />
          <h2>UDHAY SHIPPING SERVICES</h2>
        </span>

        <div className="left-column">
  <div className="address">
    <h2>Contact Details</h2>
    Address :
    <p>Plot No.101, Sector - 8, Unit No.13, Ground Floor, Iconic Business Center, Gandhidham-Kutch. 370201, Gujarat</p>
  </div>
</div>
<div className="right-column">
  <div className="phone">
     Phone No :
    <p>Thomas Varghese: 9429001570,7041520054</p>
    
  </div>
</div>
<div className="column">
  <div className="email">
     Email :
    <p>kandla.uss@gmail.com</p>
    
  </div>
</div>

        <div className="policy">
          <p>© 2024 UDHAY SHIPPING SERVICES. All rights reserved.</p>
          <span>
         
          </span>
        </div>
      </footer>
    </div>
  );
}

export default END;
