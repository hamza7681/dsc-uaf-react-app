import React from "react";

function Map() {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "80px" }}>
        <h2
          style={{ color: "#0079c2", textAlign: "center", fontWeight: "bold" }}
        >
          Contact Us
        </h2>
        <div
          style={{
            backgroundColor: "red",
            height: "5px",
            width: "40px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></div>
        <br />
        <br />
        <br />
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d6808.350548905828!2d73.0688752!3d31.4368413!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x392243047d8159ff%3A0x873d2ead117bdb40!2sNew%20CS%20department%20of%20Computer%20Science%20%26%20DSC%20UAF%20Near%20motor%20pool%2C%20University%20of%20Agriculture%20Faisalabad%2C%20Punjab%2038000!3m2!1d31.436841299999998!2d73.0688752!5e0!3m2!1sen!2s!4v1629024818782!5m2!1sen!2s"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Map;
