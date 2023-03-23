import express from 'express';
import { AddTask,getAllTasks,updateTask,deleteTask } from '../controllers/taskController.js';
import { isAuth } from '../middlewares/isAuth.js';

const router = express.Router()


router.post('/new',isAuth,AddTask)

router.get('/allTasks',isAuth,getAllTasks)

router.route('/:id').put(isAuth,updateTask).delete(isAuth, deleteTask)
export default router