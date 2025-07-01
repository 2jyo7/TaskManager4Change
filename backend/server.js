const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/connectDB');
const taskRoutes = require('./routes/taskRoute');

dotenv.config();



const app = express();

const PORT = process.env.PORT || 3200;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", taskRoutes)


connectDB().then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

