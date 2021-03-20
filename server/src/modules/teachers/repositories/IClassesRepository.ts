import ICreateClassDTO from '../dtos/ICreateClassDTO';
import Class from '../infra/typeorm/entities/Class';

export default interface IClassesRepository {
  findBySubject(subject: string): Promise<Class | undefined>;
  create(data: ICreateClassDTO): Promise<Class>;
  save(user: Class): Promise<Class>;
}
