import ClassSchedule from '@modules/teachers/infra/typeorm/entities/ClassSchedule';
import convertHourToMinutes from '@shared/utils/convertHourToMinutes';
import { inject, injectable } from 'tsyringe';
import IClassesSchedulesRepository from '../repositories/IClassesSchedulesRepository';

interface IRequest {
  week_day: number;
  time: string;
  subject: string;
}
@injectable()
class ListClassScheduleService {
  constructor(
    @inject('ClassesSchedulesRepository')
    private classesSchedulesRepository: IClassesSchedulesRepository,
  ) {}

  public async execute({
    time,
    subject,
    week_day,
  }: IRequest): Promise<ClassSchedule[]> {
    const timeInMinutes = convertHourToMinutes(time);
    const users = await this.classesSchedulesRepository.findAllClassSchedule({
      week_day,
      subject,
      time: timeInMinutes,
    });

    return users;
  }
}
export default ListClassScheduleService;
