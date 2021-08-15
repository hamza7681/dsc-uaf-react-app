import React from "react";
import { Card } from "react-bootstrap";
import pic1 from "../../Assets/logo10.png";
import pic2 from "../../Assets/logo11.png";
import pic3 from "../../Assets/logo13.png";
import pic4 from "../../Assets/logo14.png";

function Aims() {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "100px" }}>
        <h2
          style={{ color: "#0079c2", textAlign: "center", fontWeight: "bold" }}
        >
          Our Aims
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
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Card
                style={{
                  width: "100%",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <Card.Img
                  variant="top"
                  src={pic1}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginTop: "5%",
                    marginBottom: "4%",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{ fontWeight: "bold", marginBottom: "7%" }}
                  >
                    Connect
                  </Card.Title>
                  <Card.Text>
                    We create a profound connection of different intellects, IT
                    professionals and students from different backgrounds. They
                    collaborate to achieve objectives on the same front.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              {" "}
              <Card
                style={{
                  width: "100%",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <Card.Img
                  variant="top"
                  src={pic2}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginTop: "5%",
                    marginBottom: "4%",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{ fontWeight: "bold", marginBottom: "7%" }}
                  >
                    Learn
                  </Card.Title>
                  <Card.Text>
                    DSC-Uaf is a team of young IT revolutionists who want to
                    promote learning to equip students with perceptual expertise
                  </Card.Text>
                  <be />
                  <br />
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card
                style={{
                  width: "100%",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <Card.Img
                  variant="top"
                  src={pic3}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginTop: "5%",
                    marginBottom: "4%",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{ fontWeight: "bold", marginBottom: "7%" }}
                  >
                    What We Do?
                  </Card.Title>
                  <Card.Text>
                    We create an engaging platform for local community meetups,
                    workshops, training to provide a guideline to the students
                    that can make them learn the IT field with an innovative
                    perspective.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card
                style={{
                  width: "100%",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <Card.Img
                  variant="top"
                  src={pic4}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginTop: "5%",
                    marginBottom: "4%",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{ fontWeight: "bold", marginBottom: "7%" }}
                  >
                    Local Community Meetups
                  </Card.Title>
                  <Card.Text>
                    We would always make sure that the students who learn from
                    this platform can leverage their set of skills and become
                    able to comply with the innovation in technology
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aims;
