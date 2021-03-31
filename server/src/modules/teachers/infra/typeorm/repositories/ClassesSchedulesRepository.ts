import IClassesSchedulesRepository from '@modules/teachers/repositories/IClassesSchedulesRepository';
import ICreateClassScheduleDTO from '@modules/teachers/dtos/ICreateClassScheduleDTO';
import { getRepository, Repository } from 'typeorm';
import IFindAllClassSchedule from '@modules/teachers/dtos/IFindAllClassSchedule';
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

  public async findAllClassSchedule({
    from,
    week_day,
    subject,
  }: IFindAllClassSchedule): Promise<ClassSchedule[]> {
    const classesSchedules = await this.ormRepository
      .createQueryBuilder('classSchedule')
      .leftJoinAndSelect('classSchedule.class', 'cs')
      .where('cs.id = classSchedule.class_id')
      .andWhere('classSchedule.from = :from', { from })
      .andWhere('classSchedule.week_day = :week_day', { week_day })
      .andWhere('cs.subject = :subject', { subject })
      .getMany();

    return classesSchedules;
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

  public async save(classSchedule: ClassSchedule): Promise<ClassSchedule> {
    return this.ormRepository.save(classSchedule);
  }
}

export default ClassesSchedulesRepository;
