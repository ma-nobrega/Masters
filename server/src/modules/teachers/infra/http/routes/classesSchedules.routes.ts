import { Router } from 'express';
import ensureAuthenticated from '@modules/users/middlewares/ensureAuthenticated';
import ClassesSchedulesController from '../controllers/ClassesSchedulesController';

const classRouter = Router();
const classesSchedulesController = new ClassesSchedulesController();

classRouter.use(ensureAuthenticated);

classRouter.post('/', classesSchedulesController.create);
classRouter.get('/', classesSchedulesController.index);

export default classRouter;
