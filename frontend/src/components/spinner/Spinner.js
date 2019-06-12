import React, { Fragment } from "react";
import spinner from "./Spinner-1s-200px.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img style={style} src={spinner} alt="React Todo Manager Spinner" />
    </Fragment>
  );
};

const style = {
  display: "block",
  alignItems: "center",
  textAlign: "center",
  margin: "auto"
};

export default Spinner;
