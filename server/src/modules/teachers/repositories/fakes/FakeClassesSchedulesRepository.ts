import IClassesSchedulesRepository from '@modules/teachers/repositories/IClassesSchedulesRepository';
import ICreateClassScheduleDTO from '@modules/teachers/dtos/ICreateClassScheduleDTO';
import ClassSchedule from '@modules/teachers/infra/typeorm/entities/ClassSchedule';
import { uuid } from 'uuidv4';

class ClassesSchedulesRepository implements IClassesSchedulesRepository {
  private classesSchedules: ClassSchedule[] = [];

  public async findByDay(week_day: number): Promise<ClassSchedule | undefined> {
    const findClassSchedules = this.classesSchedules.find(
      day => day.week_day === week_day,
    );
    return findClassSchedules;
  }

  public async create({
    week_day,
    from,
    to,
    class_id,
  }: ICreateClassScheduleDTO): Promise<ClassSchedule> {
    const classSchedule = new ClassSchedule();
    Object.assign(classSchedule, {
      id: uuid(),
      week_day,
      from,
      to,
      class_id,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.classesSchedules.push(classSchedule);
    return classSchedule;
  }

  public async save(classSchedule: ClassSchedule): Promise<ClassSchedule> {
    const classIndex = this.classesSchedules.findIndex(
      findIndex => findIndex.id === classSchedule.id,
    );

    this.classesSchedules[classIndex] = classSchedule;

    return classSchedule;
  }
}

export default ClassesSchedulesRepository;
