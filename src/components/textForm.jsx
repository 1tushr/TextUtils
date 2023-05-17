import React from "react";

export default function textForm(props) {
  return (
    <div>
      <div className="mb-3">
        <h2>{props.heading}</h2>
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <div>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={8}
            defaultValue={""}
          />
        </div>
      </div>
      <button className="btn btn-primary">Convert to UpperCase</button>
    </div>
  );
}
