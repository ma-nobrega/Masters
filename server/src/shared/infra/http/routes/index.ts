import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import classesRouter from '@modules/teachers/infra/http/routes/classes.routes';
import classesSchedulesRouter from '@modules/teachers/infra/http/routes/classesSchedules.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/classes', classesRouter);
routes.use('/classes-schedules', classesSchedulesRouter);

export default routes;
