import React from "react";
import { Card } from "react-bootstrap";
import dp1 from "../../Assets/logo18.jpg";
import dp2 from "../../Assets/logo19.jpg";
import dp3 from "../../Assets/logo20.jpg";
import dp4 from "../../Assets/logo21.jpg";
import dp5 from "../../Assets/logo22.jpg";
import dp6 from "../../Assets/logo23.jpg";

function Intro() {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "100px" , marginBottom:'100px'}}> 
      <h2
          style={{ color: "#0079c2", textAlign: "center", fontWeight: "bold"}}
        >
          Our Team
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
        <br/><br/><br/>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Card
                style={{
                  width: "100%",
                  alignItems: "center",
                  textAlign: "center",
                  backgroundColor: "#0079c2",
                }}
              >
                <Card.Img
                  variant="top"
                  src={dp2}
                  style={{
                    borderRadius: "50px",
                    width: "100px",
                    height: "100px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "red" }}>Awais Arfan</Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    Passionate and dynamic young professional, with experience
                    of working as a qualified Python developer. Community member
                    at The Global Shapers Community. Machine Learning, Data
                    Science, Python Programming, Debater, Mobile Journalist.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                style={{
                  width: "100%",
                  alignItems: "center",
                  textAlign: "center",
                  backgroundColor: "#0079c2",
                }}
              >
                <Card.Img
                  variant="top"
                  src={dp1}
                  style={{
                    borderRadius: "50px",
                    width: "100px",
                    height: "100px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "red" }}>
                    Bushra Kainat Tariq
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    An ardent young lady, creative and innovative in her
                    ideas.Having appreciable tech knowledge about android, web,
                    AR, VR, MR and digital literacy, competent in tech
                    market,has handful experience in web contents, review
                    articles, tech articles, success stories and many more to
                    explore.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                style={{
                  width: "100%",
                  alignItems: "center",
                  textAlign: "center",
                  backgroundColor: "#0079c2",
                }}
              >
                <Card.Img
                  variant="top"
                  src={dp3}
                  style={{
                    borderRadius: "50px",
                    width: "100px",
                    height: "100px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "red" }}>
                    Hamza Sidique
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    Passionate and dynamic young professional, with experience
                    of working as a qualified ReactJs / React Native Developer
                    in non-profit environment, also has worked with Project of
                    “Driver Drowsiness Detection System” at Department of
                    Computer Science, UAF.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <Card
                style={{
                  width: "100%",
                  alignItems: "center",
                  textAlign: "center",
                  backgroundColor: "#0079c2",
                }}
              >
                <Card.Img
                  variant="top"
                  src={dp4}
                  style={{
                    borderRadius: "50px",
                    width: "100px",
                    height: "100px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "red" }}>Amna Malik</Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    She is so passionate and dedicated towards her job. The team
                    feels proud to have her as a Management Lead.
                  </Card.Text>
                  <br />
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                style={{
                  width: "100%",
                  alignItems: "center",
                  textAlign: "center",
                  backgroundColor: "#0079c2",
                }}
              >
                <Card.Img
                  variant="top"
                  src={dp5}
                  style={{
                    borderRadius: "50px",
                    width: "100px",
                    height: "100px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "red" }}>Farooq Aziz</Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    Professional Android developer and innovative Graphic
                    designer with Creative and originated mind,currently working
                    at Technopur Software Development Company.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                style={{
                  width: "100%",
                  alignItems: "center",
                  textAlign: "center",
                  backgroundColor: "#0079c2",
                }}
              >
                <Card.Img
                  variant="top"
                  src={dp6}
                  style={{
                    borderRadius: "50px",
                    width: "100px",
                    height: "100px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "red" }}>Ali Haider</Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    Mmulti-talented student .Lead graphic designers are
                    responsible for designing and driving a company’s brand or
                    overseeing company-wide campaigns. Senior
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

export default Intro;
