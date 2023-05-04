// const heading = React.createElement("h1", {id:"heading"}, "hello world from react!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//CREATING NESTED DIV USING REACT
//NOTE:- ReactElement(object) => HTML(browser understand)

{
  /* <div id="parent">
  <div id="child">
    <h1>i am h1 tag</h1>
    <h2>i am h2 tag</h2>
  </div>
  <div id="child2">
    <h1>i am h1 tag</h1>
    <h2>i am h2 tag</h2>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    //use array for sibling
    [
      React.createElement("h1", {}, "i am h1 tag"),
      React.createElement("h2", {}, "i am h2 tag"),
    ]
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// react will replace whatever written div root in html
