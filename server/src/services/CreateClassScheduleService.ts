import { getRepository } from 'typeorm';
import ClassSchedule from '../models/ClassSchedule';

interface Request {
  week_day: number;
  from: number;
  to: number;
  class_id: string;
}

class CreateClassScheduleService {
  public async execute({
    week_day,
    from,
    to,
    class_id,
  }: Request): Promise<ClassSchedule> {
    const ClassSchedulesRepository = getRepository(ClassSchedule);

    const checkClassScheduleExists = await ClassSchedulesRepository.findOne({
      where: { week_day },
    });
    if (checkClassScheduleExists) {
      throw new Error('Subject already used.');
    }

    const lesson = ClassSchedulesRepository.create({
      week_day,
      from,
      to,
      class_id,
    });
    await ClassSchedulesRepository.save(lesson);

    return lesson;
  }
}
export default CreateClassScheduleService;
