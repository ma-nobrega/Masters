import { Router } from 'express';
import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import Class from '../models/Class';

import CreateClassService from '../services/CreateClassService';

const classRouter = Router();

classRouter.use(ensureAuthenticated);

classRouter.post('/', async (request, response) => {
  const { subject, cost, user_id } = request.body;

  const createClass = new CreateClassService();

  const lesson = await createClass.execute({
    subject,
    cost,
    user_id,
  });

  return response.json(lesson);
});

classRouter.get('/', (request, response) => {
  const classesRepository = getRepository(Class);
  const classes = classesRepository.find();
  return response.json(classes);
});

export default classRouter;
