import { getRepository } from 'typeorm';
import Class from '../models/Class';

interface Request {
  subject: string;
  cost: number;
  user_id: string;
}

class CreateClassService {
  public async execute({ subject, cost, user_id }: Request): Promise<Class> {
    const ClasssRepository = getRepository(Class);

    const checkClassExists = await ClasssRepository.findOne({
      where: { subject },
    });
    if (checkClassExists) {
      throw new Error('Subject already used.');
    }

    const lesson = ClasssRepository.create({
      subject,
      cost,
      user_id,
    });
    await ClasssRepository.save(lesson);

    return lesson;
  }
}
export default CreateClassService;
