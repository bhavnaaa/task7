import React from 'react';

function Users() {
  const users = [
    { email: 'user1@example.com', password: '******', signupTime: '2024-09-20', ip: '192.168.1.1' },
    { email: 'user2@example.com', password: '******', signupTime: '2024-09-21', ip: '192.168.1.2' },
  ];

  return (
    <div className="data-grid">
      <table>
        <thead>
          <tr>
            <th>Email ID</th>
            <th>Password</th>
            <th>Signup Time</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.signupTime}</td>
              <td>{user.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
