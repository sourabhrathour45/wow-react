import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor(props) {
    super(props);

    //console.log("parent constructor")
  }
  componentDidMount() {
    //console.log("parent component did mount")
    //here we make API call
  }
  render() {
    //console.log("parent render")
    return (
      <div>
        <h1>About class Component</h1>
        <h2>This is Namaste React Web series</h2>
        <UserClass name={"abhishek (class)"} location={"Ghazipur (class)"} />
      </div>
    );
  }
}
// const About = () => {
//     return (
//       <div>
//         <h1>About </h1>
//         <h2> React web series</h2>
       
//         <UserClass name={"abhishek (class)"} location={"Ghazipur (class)"} />
//       </div>
//     );
// };

export default About;