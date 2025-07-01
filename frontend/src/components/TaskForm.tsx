"use client"
import axios from 'axios';
import React, { useState } from 'react';

const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    assignedTo: '',
    status: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3200/api/tasks', task);
      console.log('Task created:', response.data);
      setTask({ title: '', description: '', assignedTo: '', status: '' });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
   <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-xl">
  <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Task</h2>
  <form onSubmit={handleSubmit} className="space-y-4">

    <div>
      <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Enter title"
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
      <textarea
        name="description"
        id="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Enter description"
        rows={3}
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">Assigned To</label>
      <input
        type="text"
        name="assignedTo"
        id="assignedTo"
        value={task.assignedTo}
        onChange={handleChange}
        placeholder="Enter name"
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
      <select
        name="status"
        id="status"
        value={task.status}
        onChange={handleChange}
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Status</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>

    <div className="text-center">
      <button
        type="submit"
        className="bg-blue-600 text-white px-3 lg:px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        Create Task
      </button>
    </div>

  </form>
</div>

  );
};

export default TaskForm;
