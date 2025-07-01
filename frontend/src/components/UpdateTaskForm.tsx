"use client";
import { TaskType } from '@/types/taskType';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UpdateTaskForm = ({ id }: { id: string }) => {

    console.log("Update Task ID:", id);

  const [updateTask, setUpdateTask] = useState<TaskType>({
    title: '',
    description: '',
    assignedTo: '',
    status: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUpdateTask((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:3200/api/${id}`);
        setUpdateTask(response.data);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3200/api/tasks/${id}`, updateTask);
      console.log('Task updated:', response.data);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
   <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl mt-6">
  <h2 className="text-2xl font-bold mb-4 text-center">Update Task</h2>
  
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={updateTask.title}
        onChange={handleChange}
        placeholder="Title"
        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
      <textarea
        name="description"
        id="description"
        value={updateTask.description}
        onChange={handleChange}
        placeholder="Description"
        rows={3}
        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">Assigned To</label>
      <input
        type="text"
        name="assignedTo"
        id="assignedTo"
        value={updateTask.assignedTo}
        onChange={handleChange}
        placeholder="Assigned To"
        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
      <select
        name="status"
        id="status"
        value={updateTask.status}
        onChange={handleChange}
        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
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
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all"
      >
        Update Task
      </button>
    </div>
  </form>
</div>

  );
};

export default UpdateTaskForm;
