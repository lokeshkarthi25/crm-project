import React from "react";
import { BiSolidLike } from "react-icons/bi";


const DashboardTop2=()=>{
    return(
        <div style={{
            display:"flex",
            position:"absolute",
            top:"70px",
            width:"255px",
            height:"90px",
            backgroundColor:"#FFA500",
            left:"660px",
            boxShadow:"0px 2px 5px rgba(0,0,0,0.7)"
           }}>
            
           <div style={{
            
            width:"100px",
            height:"90px",
            
           }}>
              <BiSolidLike color="white" style={{
                 width:"50px",
                 height:"50px",
                textAlign:"center",
                marginTop:"20px"
           }} /> 
           </div>
           <div style={{
            marginRight:"0",
            width:"155px",
            height:"90px",
            backgroundColor:"whitesmoke"
           }}>
              <h3 style={{color:"rgb(66,66,66)",textAlign:"start",padding:"6px"}}>Likes</h3>
              <h3 style={{color:"rgb(66,66,66)",textAlign:"start",paddingLeft:"6px"}}>10M</h3>
           </div>

            </div>
    )
}
export default DashboardTop2