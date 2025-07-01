import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Collaborative Task Manager
      </h1>

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* Task List (takes 2 columns on large screens, full width on small) */}
        <div className="lg:col-span-2">
          <TaskList />
        </div>

        {/* Task Form (right column on large screens, bottom on small) */}
        <div>
          <div className="bg-white rounded-xl shadow-md p-6">
            
            <TaskForm />
          </div>
        </div>
      </div>
    </main>
  );
}
