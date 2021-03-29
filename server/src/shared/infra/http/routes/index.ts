import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import classesRouter from '@modules/teachers/infra/http/routes/classes.routes';
import classesSchedulesRouter from '@modules/teachers/infra/http/routes/classesSchedules.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/classes', classesRouter);
routes.use('/classes-schedules', classesSchedulesRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
