import React from "react";
import Model from "react-modal";
import "./cusform.css";

const OrderForm = ({ handleInput, handleSubmit, formValue,visible,setVisible }) => {
  return (
    <div>
      <button
        style={{ top: "90px", position: "absolute", right: "50px" }}
        onClick={() => setVisible(true)}
      >
        Add Order
      </button>
      <Model
      ariaHideApp={false}
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={{
          overlay: {
            top:"50px",
            background: "rgba(0,0,0,0.5)",
          },
          content: {
            left: "560px",
            width: "400px",
            height: "500px",
            borderRadius: "8px",
            overflow: "hidden",
          },
        }}
      >
        <form className="formstyle" onSubmit={handleSubmit}>
          <h2>Add Order</h2>
          <input
          required
            className="inputfield"
            type="number"
            name="OrderID"
            placeholder="enter OrderID"
            value={formValue.OrderID}
            onChange={handleInput}
            maxLength={4}
            minLength={4}
          />
          <br />
          <input
          required
            className="inputfield"
            type="text"
            name="CustomerName"
            placeholder="enter CustomerName"
            value={formValue.CustomerName}
            onChange={handleInput}
            minLength={3}
          />
          <br />
          <input
          required
            className="inputfield"
            type="text"
            name="Product"
            placeholder="enter Product"
            value={formValue.Product}
            onChange={handleInput}
            minLength={2}
          />
          <br />
          <input
          required
            className="inputfield"
            type="number"
            name="Quantity"
            placeholder="enter Quantity"
            value={formValue.Quantity}
            onChange={handleInput}
            maxLength={4}
          />
          <br />
          <input
          required
            className="inputfield"
            type="number"
            name="PriceperUnit"
            placeholder="enter PriceperUnit"
            value={formValue.PriceperUnit}
            onChange={handleInput}
            maxLength={8}
          />
          <br />
          <input
          required
            className="inputfield"
            type="number"
            name="TotalPrice"
            placeholder="enter TotalPrice"
            value={formValue.TotalPrice}
            onChange={handleInput}
            maxLength={10}
          />
          <br /> <br />
          <button type="submit" style={{ marginRight: "15px" }}>
            Submit
          </button>
          <button onClick={() => setVisible(false)}>close</button>
        </form>
      </Model>
    </div>
  );
};

export default OrderForm;
