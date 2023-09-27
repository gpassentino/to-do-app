const toDoModel = require('../models/toDoModel');

const toDoController = {};

toDoController.getToDo = async (req, res) => {
  try {
    const toDo = await toDoModel.find();
    res.send(toDo);
  } catch (err) {
    console.error('Error fetching ToDo items: ', err);
    res.status(500).send('Internal server error');
  }
};

toDoController.saveToDo = async (req, res) => {
  try {
    const { text, priority } = req.body;
    //can the line below be rewritten?
    if (!['high', 'medium', 'low'].includes(priority)) {
      return res.status(400).send('Invalide priority value');
    }
    const newData = await toDoModel.create({ text, priority });
    console.log('Added successfully...');
    console.log(newData);
    res.send(newData);
  } catch (err) {
    console.error('Error creating ToDo item: ', err);
    res.status(500).send('Interal server error');
  }
};

module.exports = toDoController;
