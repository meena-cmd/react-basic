import React from "react";
class UserClass extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        count:0,
        count2:2
    };
    console.log("child constructor")
  }
  componentDidMount(){
    console.log("child did mount")
  }
  

    render() {
        const {name,contact,location}=this.props;
        const {count}=this.state
        console.log("child render")

    return (
      <div className="User_box">
        <h3>count={count}</h3>
        {/* <h3>count2={count2}</h3> */}
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Increase</button>
        <h3>{name}</h3>
        <h4>{contact}</h4>
        <h4>{location}</h4>
      </div>
    )
  }
}
export default UserClass;
