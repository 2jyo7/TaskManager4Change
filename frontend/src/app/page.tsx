import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8">
      <h1 className="text-2xl font-bold text-center mb-8 text-blue-800">
        Collaborative Task Manager
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Task List spans 2 columns on large screens */}
        <div className="lg:col-span-2">
          <TaskList />
        </div>

        {/* Task Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Create a New Task
            </h2>
            <TaskForm />
          </div>
        </div>
      </div>
    </main>
  );
}
