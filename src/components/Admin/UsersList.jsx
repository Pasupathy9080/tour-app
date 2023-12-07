import React, { useState, useEffect } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import { Table, Button } from 'reactstrap';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://tour-app-be.onrender.com/api/v1/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://tour-app-be.onrender.com/api/v1/users/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      await response.json();
      toast.success("User Deleted successfully")

      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ToastContainer/>
      <div className="d-flex align-items-center justify-content-center gap-5 bg-success rounded-2 p-2 mb-2 flex-wrap">
        <h3 className='text-light fw-bold'>All Users</h3>
        <h3 className='text-light fw-bold'>Users count: <span className='bg-warning px-2 rounded-5'>{users.length}</span></h3>
      </div>

      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button className='text-light border-0 bg-danger' onClick={() => handleDelete(user._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersList;
