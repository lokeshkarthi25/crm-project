import React from "react";
import "./cusform.css";
import Model from "react-modal";

const CustomerForm = ({
  handleSubmit,
  handleInput,
  formValue,
  editCustomer,
  handleUpdate,
  handleCancelUpdate,
  setFormValue,
  InitialValue,
  setVisible,
  openForm,
  visible
}) => {
  

  

  const resetForm = () => {
    setFormValue(InitialValue);
    setVisible(false);
    handleCancelUpdate();
  };

  return (
    <div>
      <button
        style={{ top: "90px", position: "absolute", right: "50px" }}
        onClick={openForm}
      >
        Add Customer
      </button>
      <Model
      ariaHideApp={false}
        isOpen={visible}
        onRequestClose={() => {
          !editCustomer ? setVisible(false) : setVisible(true);
        }}
        style={{
          overlay: {
            top:"50px",
            background: "rgba(0,0,0,0.5)",
          },
          content: {
            left: "560px",
            width: "400px",
            height: "350px",
            borderRadius: "8px",
            overflow: "hidden",
          },
        }}
      >
        <div className="formstyle">
          <form onSubmit={!editCustomer ? handleSubmit : handleUpdate}>
            {!editCustomer ? <h2>Add a Customer</h2> : <h2>Update</h2>}
            <input
            required
              className="inputfield"
              type="text"
              name="Name"
              placeholder="enter name"
              value={formValue.Name}
              onChange={handleInput}
              minLength={3}
            />
            <input
            required
              className="inputfield"
              type="email"
              name="Email"
              placeholder="enter email"
              value={formValue.Email}
              onChange={handleInput}
              minLength={13}
            />
            <input
            required
              className="inputfield"
              type="tel"
              name="Mobile"
              placeholder="enter mobile no"
              value={formValue.Mobile}
              onChange={handleInput}
              maxLength={10}
              minLength={10}
            />
            {!editCustomer ? (
              <>
                <button type="submit" style={{ marginRight: "15px" }}>
                  Submit
                </button>
                <button onClick={() => setVisible(false)}> close </button>
              </>
            ) : (
              <>
                <button type="submit" style={{ marginRight: "15px" }}>
                  Update
                </button>
                <button type="button" onClick={resetForm}>
                  Cancel Update
                </button>
              </>
            )}
          </form>
        </div>
      </Model>
    </div>
  );
};
export default CustomerForm;
