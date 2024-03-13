import React from "react";
import "./Customer.css";
import "./Customersearch.css"

const Customersearch=({search,setSearch})=>{
    return(
      <div className="box">
        <input
        className="searchbox"
        id="search"
        type="text"
        role="searchbox"
        placeholder= "Search Customers"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      
      <a href="#ww.nlol.com">
        <i className="fa fa-search"></i>
      </a>
      
    </div>

    )
}
export default Customersearch