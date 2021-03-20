import ClassSchedule from '@modules/teachers/infra/typeorm/entities/ClassSchedule';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IClassesSchedulesRepository from '../repositories/IClassesSchedulesRepository';

interface IRequest {
  week_day: number;
  from: number;
  to: number;
  class_id: string;
}

@injectable()
class CreateClassScheduleService {
  constructor(
    @inject('ClassesSchedulesRepository')
    private classScheduleRepository: IClassesSchedulesRepository,
  ) {}

  public async execute({
    week_day,
    from,
    to,
    class_id,
  }: IRequest): Promise<ClassSchedule> {
    const checkClassScheduleExists = await this.classScheduleRepository.findByDay(
      week_day,
    );
    if (checkClassScheduleExists) {
      throw new AppError('Week day already used.');
    }

    const schedules = await this.classScheduleRepository.create({
      week_day,
      from,
      to,
      class_id,
    });
    return schedules;
  }
}
export default CreateClassScheduleService;
