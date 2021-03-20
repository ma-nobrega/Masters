import AppError from '@shared/errors/AppError';
import Class from '@modules/teachers/infra/typeorm/entities/Class';
import { inject, injectable } from 'tsyringe';
import IClassesRepository from '../repositories/IClassesRepository';

interface Request {
  subject: string;
  cost: number;
  user_id: string;
}
@injectable()
class CreateClassService {
  constructor(
    @inject('ClassesRepository')
    private classRepository: IClassesRepository,
  ) {}

  public async execute({ subject, cost, user_id }: Request): Promise<Class> {
    const checkClassExists = await this.classRepository.findBySubject(subject);
    if (checkClassExists) {
      throw new AppError('Subject already used.');
    }

    const lesson = await this.classRepository.create({
      subject,
      cost,
      user_id,
    });

    return lesson;
  }
}
export default CreateClassService;
