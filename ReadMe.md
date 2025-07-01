# 📝 Collaborative Task Manager

A simple yet powerful full-stack web application for managing team tasks collaboratively. Built using the **MERN stack** with a responsive UI powered by **Tailwind CSS** and **Next.js App Router**.

---

## 🚀 Features

✅ Create a new task with:

- Title
- Description
- Assigned To (team member's name)
- Status (`To Do`, `In Progress`, `Done`)

✅ Update any task  
✅ Delete any task  
✅ Filter tasks by **status** or **assignee**  
✅ View detailed task information  
✅ Fully responsive design for all screen sizes

---

## 🛠️ Tech Stack

### Frontend:

- [Next.js 14 (App Router)](https://nextjs.org/)
- React with Functional Components & Hooks
- Tailwind CSS for UI
- Axios for API requests

### Backend:

- Express.js
- Node.js
- MongoDB (via Mongoose)

---

## 📁 Project Structure

├── app/
│ ├── page.tsx # Home page (TaskList + TaskForm)
│ ├── updateTask/[id]/page.tsx # Dynamic route for editing tasks
├── components/
│ ├── TaskForm.tsx
│ ├── TaskList.tsx
│ ├── UpdateTaskForm.tsx
├── types/
│ └── taskType.ts # TypeScript interface for tasks
├── backend/
│ ├── server.js # Express server
│ ├── db/connectDB.js # MongoDB connection
│ └── model/task.js # Mongoose schema
│ └── routes/taskRoutes.js # All API routes

---

## ⚙️ Getting Started

### 📦 Prerequisites

- Node.js ≥ 18
- MongoDB running locally or Atlas

---

### 📂 Backend Setup (Express API)

1. Navigate to the backend directory:

```
cd backend
Install dependencies:


Edit
npm install
Create a .env file:

.env

PORT=3200
MONGO_URI=mongodb://localhost:27017/taskdb
Start the server:


Edit
node server.js
🖥️ Frontend Setup (Next.js)
Navigate to the root (frontend) folder:

Edit
cd frontend
Install dependencies:


Edit
npm install
Run the development server:


npm run dev
Visit: http://localhost:3000

🔗 API Endpoints
Method	Route	Description
GET	/api/	Get all tasks
GET	/api/:id	Get single task
POST	/api/tasks	Create a task
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task

🧪 Filter Functionality
Filters are available in the Task List UI:

By Status (To Do, In Progress, Done)

By Assignee

🖼️ Screenshots
Include screenshots of your app UI once ready

💡 Future Enhancements
✅ User authentication

⏳ Team collaboration

⏳ Due dates & reminders

⏳ Drag & drop task status board

🤝 Author
Built with ❤️ by Soni Kumari

```
