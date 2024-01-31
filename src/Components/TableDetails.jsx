import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const TableDetails = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Assuming you have a token stored somewhere (localStorage, context, etc.)
    const token = localStorage.getItem('token');

    // Making a request to the API using Axios
    axios.get('https://login-signup-backend-lovat.vercel.app/login', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      // Assuming the response data is an array of user objects
      setUserData(response.data);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    })
    .finally(() => {
        setIsLoading(false);
      });
    ;
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Encrypted Password</th>
          </tr>
        </thead>
        <tbody>
        {isLoading ? (
       <p className='loading'>Loading...</p>
      ) : (
        <div>
        </div>
      )}
          {userData?.map((user,index) => (
            <tr key={user._id}>
               <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.dob}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableDetails;
