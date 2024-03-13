import React from "react";
import { MdShoppingCart } from "react-icons/md";

const DashboardTop=()=>{
    return(
        <div style={{
            display:"flex",
            position:"absolute",
                top:"70px",
                width:"255px",
                height:"90px",
                backgroundColor:"#6FB642",
               left:"300px",
               boxShadow:"0px 2px 5px rgba(0,0,0,0.7)"
           }}>
            
           <div style={{
            
            width:"100px",
            height:"90px",
            
           }}>
              <MdShoppingCart color="white" style={{
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
              <h3 style={{color:"rgb(66,66,66)",textAlign:"start",padding:"6px"}}>Total Profit</h3>
              <h3 style={{color:"rgb(66,66,66)",textAlign:"start",paddingLeft:"6px"}}>1000K</h3>
           </div>

            </div>
    )
}
export default DashboardTop