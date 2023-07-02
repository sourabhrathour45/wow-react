//! component class is js class
import React from "react";

class UserClass extends React.Component{
    constructor(props) {
      super(props);
      
      //!using useState in class in react
      this.state = { 
        userInfo: {
          name: "dummy",
          location:"default",
        },
       };
      //console.log("child constructor");
      //!we can create any no. of usestate() variables in this.state while using class but when doing this in functional component each time we create a new state variable we define it again....
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/abhi-si");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
    //console.log("child component did mount");
  }
    
  render() {
    // const { name, location } = this.state.userInfo;
    const { name, location } = this.state.userInfo;
    // debugger;
      
      //console.log("child render");
        return (
          <div className="user-card">
            
                
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>contact:@abhisheksingh96</h4>
          </div>
        );
    }
}

export default UserClass;