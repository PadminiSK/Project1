import React,{Component}  from "react";
import { EMPLOYEES } from "../Data";

export class Employee extends Component{
    render(){
        return(
            <div className= "search" style={{position: "absolute", margin: "0", top: "43%", left: "48%", transform: "translate(-50%, -50%)", msTransform: "translate(-50%, -50%)", width: "370px", textAlign: "center",backgroundColor:"cornsilk",height:"213px"}}>
              <div style={{paddingTop:"50px",paddingRight:"135px",fontSize:"25px"}}><label><b>Name : {EMPLOYEES[0].name}</b></label></div>
              <div style={{paddingTop:"30px",paddingRight:"120px",fontSize:"25px"}}><label><b>Employee id : {EMPLOYEES[0].employeeid}</b></label></div>
              <div style={{paddingTop:"30px",paddingRight:"130px",fontSize:"25px"}}><label><b>Place : {EMPLOYEES[0].place}</b></label></div>
            </div>
        )}
}
