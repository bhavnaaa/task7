import React from 'react';

function TaskLists() {
  const taskLists = [
    { title: 'Project A', email: 'user1@example.com', noOfTasks: 5, creationTime: '2024-09-18', lastUpdated: '2024-09-19' },
    { title: 'Project B', email: 'user2@example.com', noOfTasks: 3, creationTime: '2024-09-19', lastUpdated: '2024-09-20' },
  ];

  return (
    <div className="data-grid">
      <table>
        <thead>
          <tr>
            <th>Task List Title</th>
            <th>Create By (email id)</th>
            <th>No of tasks</th>
            <th>Creation Time</th>
            <th>Last updated</th>
          </tr>
        </thead>
        <tbody>
          {taskLists.map((taskList, index) => (
            <tr key={index}>
              <td>{taskList.title}</td>
              <td>{taskList.email}</td>
              <td>{taskList.noOfTasks}</td>
              <td>{taskList.creationTime}</td>
              <td>{taskList.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskLists;
