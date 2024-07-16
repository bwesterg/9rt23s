import React, { useState } from 'react';
import './App.css';
import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';
import data from "./data.json";
import Modal from './components/Modal';



function App() {
  const [users, setUsers] = useState(data);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <div className="app-container">
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Staus</th>
              <th>Sign Up Date</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ 
              id, name, email, role, 
              status, signUpDate, lastLogin 
            }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <span className={`label label-${role}`}>
                    {role}
                  </span>
                </td>
                <td>
                  <span className={`label label-${status}`}>
                    {status}
                  </span>
                </td>
                <td>{signUpDate}</td>
                <td>{lastLogin}</td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill className="delete"/>
                    <BsPencilFill className="edit"/>
                  </span>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>
      <button 
        className="btn"
        onClick={()=>setModalOpen(true)}
      >Add</button>
      {modalOpen && <Modal closeModal={()=>setModalOpen(false)}/>}
    </div>
    </>
  )
}

export default App
