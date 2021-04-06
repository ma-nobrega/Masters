import { Router } from 'express';
import ensureAuthenticated from '@modules/users/middlewares/ensureAuthenticated';
import ClassesController from '../controllers/ClassesController';

const classRouter = Router();
const classesController = new ClassesController();

classRouter.use(ensureAuthenticated);

classRouter.post('/', classesController.create);
classRouter.get('/', classesController.index);

export default classRouter;
