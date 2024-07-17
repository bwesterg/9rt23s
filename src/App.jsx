import React, { useState } from 'react';
import './App.css';
import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';
import data from "./data.json";
import Modal from './components/Modal';

function App() {
  const [users, setUsers] = useState(data);
  const [modalOpen, setModalOpen] = useState(false);
  const [editRowIndex, setEditRowIndex] = useState(null);

  const handleEditRow = (index) => {
    setEditRowIndex(index);
    setModalOpen(true);
  }

  const handleDeleteRow = (id) => {
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
  };

  const handleSubmit = (newUser) => {
    if (editRowIndex !== null) {
      const updatedUsers = users.map((user, index) =>
        index === editRowIndex ? newUser : user
      );
      setUsers(updatedUsers);
    } else {
      setUsers([...users, newUser]);
    }
    setEditRowIndex(null);
  };

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
                <th>Status</th>
                <th>Sign Up Date</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({
                id, name, email, role,
                status, signUpDate, lastLogin
              }, index) => (
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
                      <BsFillTrashFill
                        className="delete"
                        onClick={() => handleDeleteRow(id)}
                        alt="delete button"
                        aria-label="delete row"
                      />
                      <BsPencilFill
                        className="edit"
                        onClick={() => handleEditRow(index)}
                        alt="delete edit"
                        aria-label="edit row"
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="btn add-user"
          onClick={() => setModalOpen(true)}
        >ADD USER</button>
        {modalOpen &&
          <Modal
            closeModal={() => {
              setModalOpen(false);
              setEditRowIndex(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={editRowIndex !== null && users[editRowIndex]}
          />
        }
      </div>
    </>
  )
}

export default App;
