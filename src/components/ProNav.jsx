import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./Nav.css"

const ProNav=()=>{
    return(
        <nav>
<div className="nav-div">
        
        <span className="nav-span">
            <AiOutlineMenu role="button" className="menu" style={{
        marginTop:"4px",
        marginRight:"10px"
       }}/>PRODUCT</span> 
       </div>
        </nav>

    )
}
export default ProNav