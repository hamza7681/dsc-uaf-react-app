import React from "react";
import par1 from "../../Assets/logo6.png";
import par2 from "../../Assets/logo7.png";
import par3 from "../../Assets/logo8.png";

function Partners() {
  return (
    <>
      <div class="container-fluid" style={{ marginTop: "100px" }}>
        <h2
          style={{ color: "#0079c2", textAlign: "center", fontWeight: "bold" }}
        >
          Our Partners
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
        <div
          className="container"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <div className="row">
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <img src={par1} alt="dsc" />
              <h5>Developer Circle From Facebook</h5>
            </div>
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <img src={par2} alt="dsc" />
              <h5>Global Shapers Community</h5>
            </div>
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <img src={par3} alt="dsc" />
              <h5>Technolangs</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
