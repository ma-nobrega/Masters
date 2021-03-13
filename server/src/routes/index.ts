import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import classesRouter from './classes.routes';
import classesSchedulesRouter from './classesSchedules.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/classes', classesRouter);
routes.use('/classes-schedules', classesSchedulesRouter);

export default routes;
