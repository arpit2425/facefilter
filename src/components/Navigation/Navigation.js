import React from "react";

function Navigation({ onroutechange, isSignedin }) {
  if (isSignedin) {
    return (
      <div>
        <nav
          style={{
            display: "inline-block",
            justifyContent: "flex-end",
            padding: "0px",
            float: "right",
          }}
        >
          <p
            onClick={() => onroutechange("signin")}
            className="f3 link dim black underline pa1 pointer"
            style={{ margin: "5px" }}
          >
            Sign out
          </p>
        </nav>
      </div>
    );
  } else {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0px",
          float: "right",
        }}
      >
        <p
          onClick={() => onroutechange("signin")}
          className="f3 link dim black underline pa1 pointer"
          style={{ margin: "5px" }}
        >
          Sign In
        </p>
        <p
          onClick={() => onroutechange("register")}
          className="f3 link dim black underline pa1 pointer"
          style={{ margin: "5px" }}
        >
          Register
        </p>
      </nav>
    );
  }
}

export default Navigation;
