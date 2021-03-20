import { Router } from 'express';
import ensureAuthenticated from '@modules/users/middlewares/ensureAuthenticated';
import ClassesSchedulesController from '../controllers/ClassesSchedulesController';

const classRouter = Router();
const classesSchedulesController = new ClassesSchedulesController();

classRouter.use(ensureAuthenticated);

classRouter.post('/', classesSchedulesController.create);

export default classRouter;
