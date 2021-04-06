import ICreateClassScheduleDTO from '../dtos/ICreateClassScheduleDTO';
import IFindAllClassSchedule from '../dtos/IFindAllClassSchedule';
import ClassSchedule from '../infra/typeorm/entities/ClassSchedule';

export default interface IClassesSchedulesRepository {
  findAllClassSchedule(data: IFindAllClassSchedule): Promise<ClassSchedule[]>;
  findBySchedule(
    week_day: number,
    from: string,
    to: string,
  ): Promise<ClassSchedule | undefined>;
  create(data: ICreateClassScheduleDTO): Promise<ClassSchedule>;
  save(classSchedule: ClassSchedule): Promise<ClassSchedule>;
}
