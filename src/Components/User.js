import { useState } from "react";

const User = ({name,contact,location})=>{
    const [count]=useState(0)
    const [count1]=useState(1)
    return (
       <div className="User_box">
        <h3>count={count}</h3>
        <h3>count1={count1}</h3>
        <h3>{name}</h3>
        <h4>{contact}</h4>
        <h4>{location}</h4>
       </div> 
    )
}
export default User;