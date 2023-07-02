import { useState } from "react";

const User = () => {
    const [count] = useState(0);
    return (
      
    <div className="user-card">
        <h1>Count = {count}</h1>
          <h2>Name: Abhishek</h2>
          <h3>Location: Bhopal</h3>
          <h4>contact:@abhisheksingh96</h4>
    </div>
  )
}

export default User;
