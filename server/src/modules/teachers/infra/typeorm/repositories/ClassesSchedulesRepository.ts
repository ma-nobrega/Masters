import IClassesSchedulesRepository from '@modules/teachers/repositories/IClassesSchedulesRepository';
import ICreateClassScheduleDTO from '@modules/teachers/dtos/ICreateClassScheduleDTO';
import { getRepository, Repository } from 'typeorm';
import ClassSchedule from '../entities/ClassSchedule';

class ClassesSchedulesRepository implements IClassesSchedulesRepository {
  private ormRepository: Repository<ClassSchedule>;

  constructor() {
    this.ormRepository = getRepository(ClassSchedule);
  }

  public async findByDay(week_day: number): Promise<ClassSchedule | undefined> {
    const user = await this.ormRepository.findOne({
      where: { week_day },
    });
    return user;
  }

  public async create({
    week_day,
    from,
    to,
    class_id,
  }: ICreateClassScheduleDTO): Promise<ClassSchedule> {
    const user = this.ormRepository.create({ week_day, from, to, class_id });
    await this.ormRepository.save(user);
    return user;
  }

  public async save(user: ClassSchedule): Promise<ClassSchedule> {
    return this.ormRepository.save(user);
  }
}

export default ClassesSchedulesRepository;
