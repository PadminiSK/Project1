import React,{Component} from "react";
import { Button} from 'react-bootstrap';

export class Login extends Component{
    // constructor(props){
    //     super(props);
    // }
   
    render(){
        return(
            <div style={{position: "absolute", margin: "0", top: "50%", left: "50%", transform: "translate(-50%, -50%)", msTransform: "translate(-50%, -50%)", width: "350px", textAlign: "center"}}>
            <div>
            <label style={{paddingRight:"20px"}}><b>Username</b></label>
            <input
            type= "username"
            name = "username"
            required
            />
            </div>
            <div style={{paddingTop:"13px"}}>
            <label style={{paddingRight:"27px"}}><b>Password</b></label>
            <input style={{paddingRight:"5px"}}
            type= "password"
            name = "password"
            required
            />
            </div>
            <div style={{paddingTop:"18px"}}>
            <Button style={{backgroundColor:"#007cba"}} type="button" onClick={()=> console.log("hereeee")}>Submit</Button></div>
            </div>
        )
    }
}