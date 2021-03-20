import ICreateClassScheduleDTO from '../dtos/ICreateClassScheduleDTO';
import ClassSchedule from '../infra/typeorm/entities/ClassSchedule';

export default interface IClassesSchedulesRepository {
  findByDay(week_day: number): Promise<ClassSchedule | undefined>;
  create(data: ICreateClassScheduleDTO): Promise<ClassSchedule>;
  save(user: ClassSchedule): Promise<ClassSchedule>;
}
