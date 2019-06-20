import React, { Fragment } from "react";
import spinner from "./Spinner-1s-200px.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        style={{
          display: "block",
          alignItems: "center",
          textAlign: "center",
          margin: "auto"
        }}
        src={spinner}
        alt="React Todo Manager Spinner"
      />
    </Fragment>
  );
};

export default Spinner;
