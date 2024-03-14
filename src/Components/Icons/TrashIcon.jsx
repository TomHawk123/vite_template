import React from "react";
import "./TrashIcon.css";

const TrashIcon = ({ type }) => {
  return <div className={`${type}-trash-can`}></div>;
};

TrashIcon.defaultProps = {
  type: "detailed",
};

export default TrashIcon;
