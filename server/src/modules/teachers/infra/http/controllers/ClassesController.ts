import CreateClassService from '@modules/teachers/services/CreateClassService';
import ListClassService from '@modules/teachers/services/ListClassService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ClassesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { subject, cost, user_id } = request.body;

    const createClass = container.resolve(CreateClassService);

    const lesson = await createClass.execute({
      subject,
      cost,
      user_id,
    });

    return response.json(lesson);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listClassService = container.resolve(ListClassService);

    const lesson = await listClassService.execute({
      user_id,
    });
    return response.json(lesson);
  }
}
