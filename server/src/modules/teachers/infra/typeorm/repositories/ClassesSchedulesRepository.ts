import IClassesSchedulesRepository from '@modules/teachers/repositories/IClassesSchedulesRepository';
import ICreateClassScheduleDTO from '@modules/teachers/dtos/ICreateClassScheduleDTO';
import { getRepository, Repository } from 'typeorm';
import IFindAllClassSchedule from '@modules/teachers/dtos/IFindAllClassSchedule';
import convertHourToMinutes from '@shared/utils/convertHourToMinutes';
import ClassSchedule from '../entities/ClassSchedule';

class ClassesSchedulesRepository implements IClassesSchedulesRepository {
  private ormRepository: Repository<ClassSchedule>;

  constructor() {
    this.ormRepository = getRepository(ClassSchedule);
  }

  public async findBySchedule(
    week_day: number,
    from: string,
    to: string,
  ): Promise<ClassSchedule | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        week_day,
        from: convertHourToMinutes(from),
        to: convertHourToMinutes(to),
      },
    });
    return user;
  }

  public async findAllClassSchedule({
    time,
    week_day,
    subject,
  }: IFindAllClassSchedule): Promise<ClassSchedule[]> {
    const classesSchedules = await this.ormRepository
      .createQueryBuilder('classSchedule')
      .innerJoinAndSelect('classSchedule.class', 'cs')
      .innerJoinAndSelect('cs.user', 'user')
      .where('cs.id = classSchedule.class_id')
      .andWhere('user.id = cs.user_id')
      .andWhere('classSchedule.from <= :time', { time })
      .andWhere('classSchedule.to > :time', { time })
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
    const user = this.ormRepository.create({
      week_day,
      from: convertHourToMinutes(from),
      to: convertHourToMinutes(to),
      class_id,
    });
    await this.ormRepository.save(user);
    return user;
  }

  public async save(classSchedule: ClassSchedule): Promise<ClassSchedule> {
    return this.ormRepository.save(classSchedule);
  }
}

export default ClassesSchedulesRepository;
