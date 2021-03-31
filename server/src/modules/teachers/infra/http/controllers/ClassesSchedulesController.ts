import CreateClassScheduleService from '@modules/teachers/services/CreateClassScheduleService';
import ListClassScheduleService from '@modules/teachers/services/ListClassScheduleService';
import AppError from '@shared/errors/AppError';
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

  public async index(request: Request, response: Response): Promise<Response> {
    const { week_day, from, subject } = request.query;

    if (!week_day?.length || !subject || !from)
      throw new AppError('Missing filters to search classes');

    const listClassScheduleService = container.resolve(
      ListClassScheduleService,
    );

    const classSchedule = await listClassScheduleService.execute({
      week_day: Number(week_day),
      from: Number(from),
      subject: String(subject),
    });
    return response.json(classSchedule);
  }
}
