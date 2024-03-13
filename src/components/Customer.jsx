// import React, { useEffect, useState } from "react";
// import "./Customer.css"
// import { MdEdit } from "react-icons/md";
// import { MdOutlineDelete } from "react-icons/md";
// import { RiAccountCircleFill } from "react-icons/ri";

// const Customer = () => {
//   const API_URL = "http://localhost:3500/client";
//   const [items, setItems] = useState([]);
//   const [search,setSearch]=useState('')
//   const [fetchError, setFetchError] = useState(null);
//   const [isloading, setIsloading] = useState(true);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) throw Error("Data not Reaceived");
//         const listItems = await response.json();
//         console.log(listItems);
//         setItems(listItems);
//         setFetchError(null);
//       } catch (error) {
//         setFetchError(error.message);
//       } finally {
//         setIsloading(false);
//       }
//     };
//     setTimeout(() => {
//       (async () => await fetchItems())();
//     }, 1000);
//   }, []);
  // const filteredData=items.filter
  // ((item)=>
  //   item.Name.toLowerCase().includes(search.toLowerCase())||
  //   item.Email.toLowerCase().includes(search.toLowerCase())||
  //   item.Mobile.toLowerCase().includes(search.toLowerCase())
  //   )

//   return (
//     <div>
//         {isloading && <p>Loading items....</p>}
//         {fetchError && <p>{`Error: ${fetchError}`}</p>}
//       <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
//       <input
//         autoFocus
//         id="search"
//         type="text"
//         role="searchbox"
//         placeholder="Search Customers"
//         value={search}
//         onChange={(e)=>setSearch(e.target.value)}
//         style={{
//           fontSize: "20px",
//           marginTop: "20px",
//           height: "30px",
//           minWidth: "150vh",
//           position:"relative",
//           left:"120px",
//           borderRadius:"5px"
//         }}
//       />
//     </form>
//       {!isloading && !fetchError && (
//         <div className="client table">
//           <h1 className="header">Customers({items.length})</h1>
//         <table className="customertable">
//           <thead>
//             <tr>
//               <th>Profile</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Mobile No</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((item) => (
//               <tr key={item.id} >
//                 <td><RiAccountCircleFill /></td>
//                 <td>{item.Name}</td>
//                 <td>{item.Email}</td>
//                 <td>{item.Mobile}</td>
//                 <td><MdEdit role="button"/></td>
//                 <td><MdOutlineDelete role="button" /></td>
//               </tr>
//             ))}
//           </tbody>
//           </table>
//           </div>
//       )}
//     </div>
//   );
// };
// export default Customer;

import React, { useEffect } from "react";
import { useState } from "react";
import "./Customer.css";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import CustomerForm from "./CustomerForm";
import Customersearch from "./Customersearch";
import Nav from "./Nav";


const InitialValue = {
  Name: "",
  Email: "",
  Mobile: "",
};
const Customer = () => {
  const [formValue, setFormValue] = useState(InitialValue);
  const [items, setItems] = useState([]);
  const [editCustomer,setEditCustomer]=useState(false);
  const [search,setSearch]=useState('');
  const [visible, setVisible] = useState(false);
  const [loading,setLoading]=useState(true)

  const openForm=()=>{
    setVisible(true);
  }


  useEffect(() => {
    fetchCustomer();
    
  }, []);


  async function fetchCustomer() {
    const res = await fetch("http://localhost:4000/post");
    const { data } = await res.json();
    setItems(data);
    console.log(data);
    setLoading(false)
  }

  function handleInput(e){
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: JSON.stringify(formValue),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      setFormValue(InitialValue);
      fetchCustomer();
      setVisible(false)
    }
  }

  function handleDelete(_id) {
    fetch(`http://localhost:4000/post/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchCustomer();
      })
      .catch((error) => console.error("Error deleting customer:", error));
  }

  function handleEdit(_id){
    const customerToEdit=items.find(
      (item)=>
    item._id===_id
    );
    setEditCustomer(customerToEdit);
    setFormValue(customerToEdit);
    setVisible(true)
  }
  async function handleUpdate(e){
    e.preventDefault()
    const res=await fetch(`http://localhost:4000/post/${editCustomer._id}`,{
      method:"PUT",
      body:JSON.stringify(formValue),
      headers:{
        "content-type":"application/json"
      },
    })
    if(res.ok){
      setFormValue(InitialValue)
      setEditCustomer(null)
      fetchCustomer()
      setVisible(false)
    }
  }
  function handleCancelUpdate(){
    setEditCustomer(false);
    setFormValue(InitialValue)
  }
  const filteredData=items.filter
  ((item)=>
    item.Name.toLowerCase().includes(search.toLowerCase())||
    item.Email.toLowerCase().includes(search.toLowerCase())||
    item.Mobile.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div style={{
      minHeight:"100vh"
    }}>
      
        <Nav/>
      
    
        <Customersearch
        search={search}
        setSearch={setSearch}/>
        <br />
       <CustomerForm
       handleSubmit={handleSubmit}
       formValue={formValue}
       handleInput={handleInput}
       editCustomer={editCustomer}
       handleUpdate={handleUpdate}
       setFormValue={setFormValue}
       InitialValue={InitialValue}
       handleCancelUpdate={handleCancelUpdate}
       visible={visible}
       setVisible={setVisible}
       openForm={openForm}/>
      <br />
      <div className="client table">
        {/* <h1 className="header">Customers({items.length})</h1> */}
       
        <table className="customertable">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading?(
              <tr>
                <td style={{
                textAlign:"center"
              }} colSpan={10}>Loading.......</td>
              </tr>
            ):( filteredData.length>0?(
            filteredData.map((item) => (
              <tr  key={item._id}>
                <td>
                  <RiAccountCircleFill />
                </td>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.Mobile}</td>
                <td>
                  <MdEdit
                    color="rgb(102,187,106)"
                    className="action"
                    role="button"
                    onClick={() => {
                      handleEdit(item._id);
                    }}
                  />
                </td>
                <td>
                  <MdOutlineDelete
                    className="action"
                    role="button"
                    onClick={() => handleDelete(item._id)}
                  />
                </td>
              </tr>
            ))):(
              <tr>
                <td style={{
                textAlign:"center"
              }} colSpan={6}>No results for "{search}"</td>
              </tr>
            )
          )}
            </tbody>
        </table>
      </div>
    </div>
  );
};
export default Customer;
