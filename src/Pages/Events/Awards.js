import React from "react";
import {Card} from 'react-bootstrap';
import eve1 from "../../Assets/12.jpg";
import eve2 from "../../Assets/11.jpg";
import eve3 from "../../Assets/10.jpg";
import eve4 from "../../Assets/9.jpg";
import eve5 from "../../Assets/8.JPG";
import eve6 from "../../Assets/7.JPG";
import eve7 from "../../Assets/6.JPG";
import eve8 from "../../Assets/5.JPG";
import eve9 from "../../Assets/4.JPG";

function Awards() {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "100px" }}>
        <h2
          style={{ color: "#0079c2", textAlign: "center", fontWeight: "bold" }}
        >
          Works & Awards
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

        <div className="container" style={{ marginTop: "70px", marginBottom:'70px' }}>
          <div className="row">
            <div className="col-md-4">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={eve1} />
              </Card>
            </div>
            <div className="col-md-4">
            <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={eve2} />
              </Card>
            </div>
            <div className="col-md-4">
            <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={eve3} />
              </Card>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-4">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={eve4} />
              </Card>
            </div>
            <div className="col-md-4">
            <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={eve5} />
              </Card>
            </div>
            <div className="col-md-4">
            <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={eve6} />
              </Card>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-4">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={eve7} />
              </Card>
            </div>
            <div className="col-md-4">
            <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={eve8} />
              </Card>
            </div>
            <div className="col-md-4">
            <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={eve9} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
