import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 contentEditable="true" spellCheck="false">
      My Favourite Locations
    </h1>
    <div className="red">
      <img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
        alt="image1"
      ></img>
      <img
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt="image2"
      ></img>
      <img
        src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        alt="image3"
      ></img>
      <img
        src="https://images.unsplash.com/photo-1634545973472-60ebfc96c4db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=821&q=80"
        alt="image4"
      />
    </div>
  </div>,
  document.getElementById("root")
);
