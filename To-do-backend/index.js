const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();



const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Routes
const taskRoutes = require('./Routes/Task');
const authRoutes = require('./Routes/Auth');

app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected Successfully'))
  .catch(() =>console.log('Connection failed'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
