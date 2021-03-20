import CreateClassService from '@modules/teachers/services/CreateClassService';
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
}
