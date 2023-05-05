import React from "react";
import ReactDOM from "react-dom";

//!JSX(transpiled before it reaches the JS)-parcel-babel

//

//!React functional component
const Title = () => (
  <h1 className="head">ABHISHEK WOW</h1>
);
const HeadingComponent = () => (
  <div id="container">
    <Title/>
    <h1 className="heading"> HELLO react using functional component</h1>;
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);