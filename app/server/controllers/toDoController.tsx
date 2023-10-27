import { Request, Response } from 'express';
import toDoModel, { ToDo } from '../models/toDoModel.tsx';

const toDoController: Record<string, any> = {};

toDoController.getToDo = async (req: Request, res: Response): Promise<void> => {
  try {
    const toDo: ToDo[] = await ToDoModel.find();
    res.send(toDo);
  } catch (err) {
    console.error('Error fetching ToDo items: ', err);
    res.status(500).send('Internal server error');
  }
};

toDoController.saveToDo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { text, priority } = req.body;
    if (!['high', 'medium', 'low'].includes(priority)) {
      return res.status(400).send('Invalid priority value');
    }
    const newData: ToDo = await ToDoModel.create({ text, priority });
    console.log('Added successfully...');
    console.log(newData);
    res.send(newData);
  } catch (err) {
    console.error('Error creating ToDo item: ', err);
    res.status(500).send('Internal server error');
  }
};

export default toDoController;
