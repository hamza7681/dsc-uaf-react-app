import React from "react";
import { Button } from "react-bootstrap";
import logo from "../../Assets/logo4.jpg";

function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row">
            <div className="col-md-6">
              <h1 style={{ color: "#0079c2" }}>Developer Student Club</h1>
              <h4 style={{ color: "#0079c2" }}>
                University of Agriculture, Faisalabad
              </h4>
              <br />
              <p style={{ textAlign: "justify" }}>
                We strive to enable students to realize their full potential in
                the computer science field and make them future influencers. We
                provide a coherent platform for students so they can acquire
                guidelines that would help them to keep up with the real-time
                innovation and market trends in this technical field.
              </p>
              <br />
              <Button variant="primary">Register</Button>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <br />
              <img
                src={logo}
                alt="dscuaf"
                className="img-fluid"
                style={{ borderRadius: "7px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
