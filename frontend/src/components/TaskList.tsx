'use client';

import { TaskType } from '@/types/taskType';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const TaskList = () => {
  const [tasksList, setTasksList] = useState<TaskType[]>([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [assigneeFilter, setAssigneeFilter] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3200/api/');
        setTasksList(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3200/api/tasks/${id}`);
      setTasksList((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const filteredTasks = tasksList.filter((task) => {
    const matchesStatus = !statusFilter || task.status === statusFilter;
    const matchesAssignee =
      !assigneeFilter ||
      task.assignedTo.toLowerCase().includes(assigneeFilter.toLowerCase());
    return matchesStatus && matchesAssignee;
  });

  return (
    <div className="p-4 max-w-6xl mx-auto flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-900">Task List</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-48"
        >
          <option value="">All Statuses</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <input
          type="text"
          value={assigneeFilter}
          onChange={(e) => setAssigneeFilter(e.target.value)}
          placeholder="Filter by Assignee"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:flex-1"
        />
      </div>

      {/* Task Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.map((task) => (
          <div
            key={task._id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {task.title}
            </h2>
            <p className="text-sm text-gray-600 mb-1">{task.description}</p>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Assigned To:</span>{' '}
              {task.assignedTo}
            </p>
            <p className="text-sm text-gray-700 mb-3">
              <span className="font-medium">Status:</span>{' '}
              <span
                className={`inline-block px-2 py-1 rounded text-xs ${
                  task.status === 'Done'
                    ? 'bg-green-100 text-green-700'
                    : task.status === 'In Progress'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {task.status}
              </span>
            </p>

           <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-4">
  <Link href={`/updateTask/${task._id}`} className="w-full sm:w-auto">
    <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-all">
      Edit
    </button>
  </Link>
  <button
    onClick={() => handleDelete(task._id!)}
    className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm transition-all"
  >
    Delete
  </button>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
