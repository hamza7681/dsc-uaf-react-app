import React from "react";
import { FaMapMarkerAlt, AiTwotonePhone, FaEnvelope } from "react-icons/all";

function ContactDetails() {
  return (
    <>
      <div
        className="container-fluid"
        style={{ marginBottom: "70px", marginTop: "70px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Location</h3>
              <span>
                <FaMapMarkerAlt />
              </span>
              <span>
                University of Agriculture, Jail Road, Faisalabad, Punjab,
                Pakistan
              </span>
            </div>
            <div className="col-md-3">
              <h3>Phone </h3>
              <span>
                <AiTwotonePhone />
              </span>
              <span>+923117110211</span>
            </div>
            <div className="col-md-3">
              <h3>Email Us</h3>
              <span>
                <FaEnvelope />
              </span>
              <span>dscuaf@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
