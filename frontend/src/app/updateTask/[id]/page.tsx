// /app/updateTask/[id]/page.tsx

import UpdateTaskForm from '@/components/UpdateTaskForm';
import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

const UpdateTask = ({ params }: PageProps) => {

  const {id } = params;
  console.log("Update Task ID:", id);
  

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">Update Task</h1>
      <UpdateTaskForm id={id} />
    </div>
  );
};

export default UpdateTask;
