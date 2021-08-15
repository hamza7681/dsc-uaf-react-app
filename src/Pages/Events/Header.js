import React from "react";

function Header() {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "50px" }}>
        <h2
          style={{ color: "#0079c2", textAlign: "center", fontWeight: "bold" }}
        >
          Events
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
        <h2 style={{ textAlign: "center", color: "#b80d0d" }}>
          <b>Note: </b> There is no event now. Events will be update soon. Stay
          tuned for next updates
        </h2>
      </div>
    </>
  );
}

export default Header;
