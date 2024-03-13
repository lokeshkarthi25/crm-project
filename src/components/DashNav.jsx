import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./Nav.css"

const DashNav=()=>{
    return(
        <nav>
<div className="nav-div">
        
        <span className="nav-span">
            <AiOutlineMenu role="button" className="menu" style={{
        marginTop:"4px",
        marginRight:"10px"
       }}/>DASHBOARD</span> 
       </div>
        </nav>

    )
}
export default DashNav