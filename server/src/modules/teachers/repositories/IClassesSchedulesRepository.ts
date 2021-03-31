import ICreateClassScheduleDTO from '../dtos/ICreateClassScheduleDTO';
import IFindAllClassSchedule from '../dtos/IFindAllClassSchedule';
import ClassSchedule from '../infra/typeorm/entities/ClassSchedule';

export default interface IClassesSchedulesRepository {
  findAllClassSchedule(data: IFindAllClassSchedule): Promise<ClassSchedule[]>;
  findByDay(week_day: number): Promise<ClassSchedule | undefined>;
  create(data: ICreateClassScheduleDTO): Promise<ClassSchedule>;
  save(classSchedule: ClassSchedule): Promise<ClassSchedule>;
}
