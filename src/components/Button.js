import React from "react";

function Button(props) {
  return (
    <>
      <div className="row" onClick={props.onClick}>
        <div className=" rounded-pill bg-opacity-30 bg-secondary w-50 m-3">
          <h1 className="bg-opacity-75 text-dark text-center">{props.title}</h1>
        </div>
      </div>
    </>
  );
}

export default Button;
