import React from 'react';

function Tasks() {
  const tasks = [
    { title: 'Task 1', description: 'Description of Task 1', taskListTitle: 'Project A', email: 'user1@example.com', creationTime: '2024-09-18' },
    { title: 'Task 2', description: 'Description of Task 2', taskListTitle: 'Project B', email: 'user2@example.com', creationTime: '2024-09-19' },
  ];

  return (
    <div className="data-grid">
      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Task List Title</th>
            <th>Create By (email id)</th>
            <th>Creation Time</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.taskListTitle}</td>
              <td>{task.email}</td>
              <td>{task.creationTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
