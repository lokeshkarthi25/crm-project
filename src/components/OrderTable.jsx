import React from "react";
import "./Order.css";
import { MdOutlineDelete } from "react-icons/md";


const OrderTable=({items,handleDelete,loading})=>{
  
    return(
        <div className="client-table">
        {/* <h1 className="headers">Orders({items.length})</h1> */}
        <table className="customertable">
          <thead>
            <tr>
              <th>OrderID</th>                                            
              <th>CustomerName</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>PriceperUnit</th>
              <th>TotalPrice</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
             {loading?(<tr>
              <td colSpan={10}>Loading items......</td>
            </tr>):(items.map((item) => (
              <tr key={item._id}>
                <td>{item.OrderID}</td>
                <td>{item.CustomerName}</td>
                <td>{item.Product}</td>
                <td>{item.Quantity}</td>
                <td>{item.PriceperUnit}</td>
                <td>{item.TotalPrice}</td>
                <td><MdOutlineDelete
                    className="action"
                    role="button"
                    onClick={() => handleDelete(item._id)}
                  /></td>
              </tr>
            )))}
          </tbody>
        </table>
      </div> 
    )
}
export default OrderTable