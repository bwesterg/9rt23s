import React from 'react';
import './Modal.css';

const Modal = ({ closeModal }) => {
  return (
    <div 
      className="modal-container" 
      onClick={(e) => {
        if(e.target.className === "modal-container"){
          closeModal();
        }
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input name="id"/>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select name="role">
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select name="status">
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="signUpDate">Sign Up Date</label>
            <input name="signUpDate"/>
          </div>
          <div className="form-group">
            <label htmlFor="lastLogin">Last Login</label>
            <input name="lastLogin"/>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Modal
