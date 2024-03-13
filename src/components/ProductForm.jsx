import React from "react";
import Model from "react-modal";
import "./cusform.css"


const ProductForm=({handleInput,handleSubmit,formValue,visible,setVisible})=>{
  return (
    <div>
      <button
        style={{ top: "90px", position: "absolute", right: "50px" }}
        onClick={() => setVisible(true)}
      >
        Add Product
      </button>
      <Model
      ariaHideApp={false}
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={{
          overlay: {
            background: "rgba(0,0,0,0.5)",
            top:"50px"
          },
          content: {
            left: "560px",
            width: "400px",
            height: "450px",
            borderRadius: "8px",
            overflow: "hidden",
          },
        }}
      >
          <h2>Add Product</h2>
        <form className="formstyle"
         onSubmit={handleSubmit}>
        <input
        required
        className="inputfield"
          type="number"
          name="ProductID"
          placeholder="enter ProductID"
          value={formValue.ProductID}
          onChange={handleInput}
        /> <br />
         <input
         required
        className="inputfield"
          type="text"
          name="ProductName"
          placeholder="enter ProductName"
          value={formValue.ProductName}
          onChange={handleInput}
        /> <br />
        <input
        required
        className="inputfield"
          type="text"
          name="Category"
          placeholder="enter Category"
          value={formValue.Category}
          onChange={handleInput}
        />       <br />
         <input
         required
        className="inputfield"
        type="number"
        name="Price"
        placeholder="enter Price"
        value={formValue.Price}
        onChange={handleInput}
      />   <br />   
      <input
      required
        className="inputfield"
          type="number"
          name="StockQuantity"
          placeholder="enter StockQuantity"
          value={formValue.StockQuantity}
          onChange={handleInput}
        /> <br />
        <button type="submit" style={{ marginRight: "15px" }}> Submit</button>
        <button onClick={() => setVisible(false)}>close</button>
      </form>
      </Model>
      </div>
    )
}
export default ProductForm