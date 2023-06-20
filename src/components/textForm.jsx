import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");
  // const defaultText="Enter your text here";
  // setText=("Enter the text here ");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpclick = (event) => {
    let utext = text.toUpperCase();
    setText(utext);
  };

  const handleLoclick = (event) => {
    let ltext = text.toLowerCase();
    setText(ltext);
  };
  const countWords = () => {
    if (text.trim() === "") {
      return 0;
    }
    return text.trim().split(/\s+/).length;
  };

  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    alert("Text Copied to Clipboard")
  }

  const resetText = () => {
    setText("Enter your text here");
  };

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
      <button className="btn btn-primary mx-3" onClick={handleUpclick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary" onClick={handleLoclick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-3 " onClick={resetText}>
        Reset Text
      </button>
      <div className="my-3 mx-3">
        <h2>Your Text Summary </h2>
        <p>
          {countWords()} <b>words and</b> {text.length} <b>characters</b>
        </p>
        <p>
          {0.008 * countWords()} <b>Minutes Read</b>
        </p>
        <h2 className="my-3">Preview</h2>
        {text}
      </div>
    </div>
  );
}
