import {Component} from 'react';
import UserClass from "./UserClass"

class About extends Component{

    constructor(props){
        super(props)
        console.log("parent constructor-1")
    }
    componentDidMount(){
        console.log("parent did mount-1")
      }

    render(){
        console.log("parent render-1")

        return (
            <div><h2>About Us</h2>
            {/* <User name={"Meena"} contact={"@meenatchid22"} location={"Chennai"}/> */}
            <UserClass name={"Meena-1"} contact={"@meenatchid22Class"} location={"Chennai"}/>
            <UserClass name={"Meena-2"} contact={"@meenatchid22Class"} location={"Chennai"}/>
            <UserClass name={"Meena-3"} contact={"@meenatchid22Class"} location={"Chennai"}/>
            </div>
        )
    }
}
    

export default About;