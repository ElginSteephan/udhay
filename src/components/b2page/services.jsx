import "./services.css";

export default function Services() {
  return (
    <div className="aboutSections" id="about">
      <div className="content">
        <h1>
          OUR <span>SERVICES</span>
        </h1>
        
        <div className="services-container">
          <div className="cf">
            <i className="fas fa-ship"></i>
            <h2>Clearing & Forwarding</h2>
          </div>
          
          <div className="i">
            <i className="fas fa-cubes"></i>
            <h2>Infrastructure Development</h2>
            <div className="t">
            <i className="fas fa-building"></i>
            <h2>Transportation</h2>
          </div>
          </div>
          
          <div className="c">
            <i className="fas fa-cubes"></i>
            <h2>Cargo Handling</h2>
            <div className="l">
            <i className="fas fa-box-open"></i>
            <h2>Logistics</h2>
          </div>
          </div>
        </div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-abc123=="
          crossorigin="anonymous"
        />
      </div>
    </div>
  );
}
