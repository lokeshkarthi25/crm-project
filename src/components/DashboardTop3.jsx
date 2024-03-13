import React from "react";
import { FaSquarePollVertical } from "react-icons/fa6";


const DashboardTop3 =()=>{
    return(
        <div style={{
            display:"flex",
            position:"absolute",
            top:"70px",
            width:"255px",
            height:"90px",
            backgroundColor:"#8F3985",
            left:"1030px",
            boxShadow:"0px 2px 5px rgba(0,0,0,0.7)"
           }}>
            
           <div style={{
            
            width:"100px",
            height:"90px",
            
           }}>
              <FaSquarePollVertical color="white" style={{
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
              <h3 style={{color:"rgb(66,66,66)",textAlign:"start",padding:"6px"}}>Sales</h3>
              <h3 style={{color:"rgb(66,66,66)",textAlign:"start",paddingLeft:"6px"}}>500K</h3>
           </div>

            </div>

     )
}
export default DashboardTop3