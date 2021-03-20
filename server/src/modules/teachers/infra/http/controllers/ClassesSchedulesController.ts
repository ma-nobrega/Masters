import CreateClassScheduleService from '@modules/teachers/services/CreateClassScheduleService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ClassesSchedulesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { week_day, from, to, class_id } = request.body;

    const createClassSchedule = container.resolve(CreateClassScheduleService);

    const schedule = await createClassSchedule.execute({
      week_day,
      from,
      to,
      class_id,
    });

    return response.json(schedule);
  }
}
