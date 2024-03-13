import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import "./Order.css";
import ProductForm from "./ProductForm";
import ProNav from "./ProNav";


const InitialValue = {
  ProductID: "",
  ProductName: "",
  Category: "",
  Price: "",
  StockQuantity: "",
};

const Product = () => {
  const [formValue, setFormValue] = useState(InitialValue);
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading,setLoading]=useState(true)


  useEffect(() => {
    fetchProduct();
   

  }, []);

  async function fetchProduct() {
    const res = await fetch("http://localhost:5000/get");
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
    const res = await fetch("http://localhost:5000/get", {
      method: "POST",
      body: JSON.stringify(formValue),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      setFormValue(InitialValue);
      fetchProduct();
      setVisible(false)
    }
  }

  function handleDelete(_id) {
    fetch(`http://localhost:5000/get/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchProduct();
      })
      .catch((error) => console.error("Error deleting product:", error));
  }

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <ProNav />
      <ProductForm
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        formValue={formValue}
        visible={visible}
        setVisible={setVisible}
      />

      <div className="client-table">
        {/* <h1 className="header">Product({items.length})</h1> */}
        <table className="customertable">
          <thead>
            <tr>
              <th>ProductID</th>
              <th>ProductName</th>
              <th>Category</th>
              <th>Price</th>
              <th>StockQuantity </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading?(<tr>
              <td colSpan={10}>Loading items......</td>
            </tr>):( items.map((item) => (
              <tr key={item._id}>
                <td>{item.ProductID}</td>
                <td>{item.ProductName}</td>
                <td>{item.Category}</td>
                <td>{item.Price}</td>
                <td>{item.StockQuantity}</td>
                <td>
                  <MdOutlineDelete
                    className="action"
                    role="button"
                    onClick={() => handleDelete(item._id)}
                  />
                </td>
              </tr>
            )))}

          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Product;
