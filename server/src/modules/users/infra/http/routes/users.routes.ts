import { Router } from 'express';

import multer from 'multer';

import uploadConfig from '@config/upload';
import ensureAuthenticated from '@modules/users/middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';
import UserAvatarControler from '../controllers/UserAvatarControler';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarControler = new UserAvatarControler();
const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarControler.update,
);

export default usersRouter;
