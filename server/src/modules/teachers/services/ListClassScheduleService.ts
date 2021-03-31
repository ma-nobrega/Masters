import ClassSchedule from '@modules/teachers/infra/typeorm/entities/ClassSchedule';
import { inject, injectable } from 'tsyringe';
import IClassesSchedulesRepository from '../repositories/IClassesSchedulesRepository';

interface IRequest {
  week_day: number;
  from: number;
  subject: string;
}
@injectable()
class ListClassScheduleService {
  constructor(
    @inject('ClassesSchedulesRepository')
    private classesSchedulesRepository: IClassesSchedulesRepository,
  ) {}

  public async execute({
    from,
    subject,
    week_day,
  }: IRequest): Promise<ClassSchedule[]> {
    const users = await this.classesSchedulesRepository.findAllClassSchedule({
      from,
      subject,
      week_day,
    });

    return users;
  }
}
export default ListClassScheduleService;
