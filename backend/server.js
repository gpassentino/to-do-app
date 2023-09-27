const express = require('express');
const mongoose = require('mongoose');
//what is cors? a package providing a connect/express middleware
const cors = require('cors');

const routes = require('./routes/ToDoRoute');

//not sure what this is doing
require('dotenv').config();

const app = express();

const initilizeDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB...');
  } catch (err) {
    console.error('Error connection to MongoDB: ', err);
  }
};

initilizeDB();

//again, no idea what is cors...
app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3001, () => console.log(`Listening on port 3001`));