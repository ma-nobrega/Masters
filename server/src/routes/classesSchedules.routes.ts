import { Router } from 'express';
import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ClassSchedule from '../models/ClassSchedule';

import CreateClassScheduleService from '../services/CreateClassScheduleService';

const classRouter = Router();

classRouter.use(ensureAuthenticated);

classRouter.post('/', async (request, response) => {
  const { week_day, from, to, class_id } = request.body;

  const createClassSchedule = new CreateClassScheduleService();

  const lesson = await createClassSchedule.execute({
    week_day,
    from,
    to,
    class_id,
  });

  return response.json(lesson);
});

classRouter.get('/', (request, response) => {
  const classesRepository = getRepository(ClassSchedule);
  const classes = classesRepository.find();
  return response.json(classes);
});

export default classRouter;
