import React,{Component}  from "react";
import { EMPLOYEES } from "../Data";
import SearchIcon from "@material-ui/icons/Search";

export class Searchemployee extends Component{
    constructor(props){
        super(props);
        this.state = {
            filtereddata:[],
        };
    }

    handleFilter= (event) => {
        const searchword = event.target.value;
        const newFilter = EMPLOYEES.filter((value)=>{
            return value.name.toLowerCase().includes(searchword.toLowerCase());
        });
        this.state.filtereddata.push(newFilter);
    }

    render(){
        return(
            <div className= "search" style={{position: "absolute", margin: "0", top: "30%", left: "50%", transform: "translate(-50%, -50%)", msTransform: "translate(-50%, -50%)", width: "350px", textAlign: "center",height:"150px"}}>
                <div className = "searchInputs" style={{marginTop:"105px",display:"flex"}}>
                    <input type="text" placeholder= "Enter a employee name..."  data = {EMPLOYEES} onChange={this.handleFilter}/>
                    <div className="searchIcon" style={{height:"37px",width:"50px",display:"grid",placeItems:"center"}}><SearchIcon/></div>
                </div>
                {/* {this.state.filtereddata.length!==0 && ( */}
                <div className="dataresult" style={{backgroundColor:"lightgrey",width:"177px"}}>
                    {EMPLOYEES.map((value,key)=>{
                        return <div style={{paddingRight:"185px"}}>{value.name}</div>
                    })}
                </div>
                {/* )} */}
            </div>
        );
    }    
}

