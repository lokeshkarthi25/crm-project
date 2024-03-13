import React, { useEffect, useState } from "react";
import "./Customer.css"
import OrderForm from "./OrderForm";
import OrderTable from "./OrderTable";
import OrderNav from "./OrderNav";


const InitialValue = {
  OrderID:"",
  CustomerName:"",
  Product:"",
  Quantity:"",
  PriceperUnit:"",
  TotalPrice:""
  
};
const Order = () => {
  const [formValue, setFormValue] = useState(InitialValue);
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading,setLoading]=useState(true)

    useEffect(() => {
        fetchOrder();

      }, []);


      async function fetchOrder() {
        const res = await fetch("http://localhost:4500/get");
        const { data } = await res.json();
        setItems(data);
        console.log(data);
        setLoading(false)
      }

      function handleInput(e) {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
      }
    
      async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:4500/get", {
          method: "POST",
          body: JSON.stringify(formValue),
          headers: {
            "content-type": "application/json",
          },
        });
        if (res.ok) {
          setFormValue(InitialValue);
          fetchOrder()
          setVisible(false)
        }
      }

      function handleDelete(_id) {
        fetch(`http://localhost:4500/get/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            fetchOrder()
          })
          .catch((error) => console.error("Error deleting order:", error));
      }
    

    return(
        <div style={{
          minHeight:"100vh"
        }}>
          <OrderNav/>
          <OrderForm
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          formValue={formValue}
          visible={visible}
          setVisible={setVisible}
          
          />
            
          <OrderTable
          items={items}
           handleDelete={handleDelete}
           loading={loading}
           />

      </div>   
    )
}
export default Order