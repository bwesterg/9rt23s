import React, { useState, useEffect } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import './Modal.css';

const initialState = {
  "id": "", "name": "", "email": "", "role": "",
  "status": "", "signUpDate": "", "lastLogin": ""
};

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState("");

  console.log(defaultValue);

  useEffect(() => {
    if (defaultValue) {
      setFormState(defaultValue);
    } else {
      setFormState(initialState);
    }
  }, [defaultValue]);

  const formValidation = () => {
    const { id, name, email, role, status, signUpDate, lastLogin } = formState;
    if (id && name && email && role && status && signUpDate && lastLogin) {
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields
        .join(", ")
        .replace("id", "ID")
        .replace("name", "Name")
        .replace("email", "Email")
        .replace("role", "Role")
        .replace("status", "Status")
        .replace("signUpDate", "Sign Up Date")
        .replace("lastLogin", "Last Login")
      );
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState, [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValidation()) return;
    onSubmit(formState);
    closeModal();
  };

  return (
    <div 
      className="modal-container" 
      onClick={(e) => {
        if (e.target.className === "modal-container") {
          closeModal();
        }
      }}
    >
      <div className="modal">
        <div className="top-close">
          <IoMdCloseCircleOutline size={35} onClick={()=>closeModal()} />
        </div>
        <div className="modal-heading">
          <h3>
            {defaultValue === false ? "Add New User" : "Edit User"}
          </h3>
        </div>
        <form>
          <div className="form-group id">
            <label htmlFor="id">ID</label>
            <input 
              name="id" 
              value={formState.id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group name">
            <label htmlFor="name">Name</label>
            <input 
              name="name" 
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group email">
            <label htmlFor="email">Email</label>
            <input 
              name="email" 
              value={formState.email}
              onChange={handleChange}  
            />
          </div>
          <div className="form-group role">
            <label htmlFor="role">Role</label>
            <select 
              name="role" 
              value={formState.role}
              onChange={handleChange} 
            >
              <option value="">Select Role</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
            </select>
          </div>
          <div className="form-group status">
            <label htmlFor="status">Status</label>
            <select 
              name="status" 
              value={formState.status}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="form-group signUpDate">
            <label htmlFor="signUpDate">Sign Up Date</label>
            <input 
              name="signUpDate" 
              type="date"
              value={formState.signUpDate}
              onChange={handleChange}  
            />
          </div>
          <div className="form-group lastLogin">
            <label htmlFor="lastLogin">Last Login</label>
            <input 
              name="lastLogin" 
              type="date"
              value={formState.lastLogin}
              onChange={handleChange}  
            />
          </div>
          {errors && 
            <div className="errors">{`${errors} must be included.`}</div>
          }
          <button 
            type="submit" 
            className="btn"
            onClick={handleSubmit}  
          >
            {defaultValue === false ? "Add" : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Modal;
