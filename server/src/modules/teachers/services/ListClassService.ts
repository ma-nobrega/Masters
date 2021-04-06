import { inject, injectable } from 'tsyringe';
import Class from '../infra/typeorm/entities/Class';
import IClassesRepository from '../repositories/IClassesRepository';

interface IRequest {
  user_id: string;
}
@injectable()
class ListClassService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Class[]> {
    const lesson = this.classesRepository.findAllClasses({ user_id });

    return lesson;
  }
}
export default ListClassService;
