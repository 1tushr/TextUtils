import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");
  // setText=("Enter the text here ");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpclick =(event)=>{
    let utext=text.toUpperCase();
  setText(utext);
  }

   const handleLoclick=(event)=>{
    let ltext=text.toLocaleLowerCase();
    setText(ltext);
  }

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
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows={8}
            defaultValue={""}
          />
        </div>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to UpperCase</button>
      <button className="btn btn-primary" onClick={handleLoclick}>Convert to LowerCase</button>
    </div>
  );
}
