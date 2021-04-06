import ICreateClassDTO from '../dtos/ICreateClassDTO';
import IFindAllClass from '../dtos/IFindAllClass';
import Class from '../infra/typeorm/entities/Class';

export default interface IClassesRepository {
  findBySubject(subject: string): Promise<Class | undefined>;
  create(data: ICreateClassDTO): Promise<Class>;
  save(lesson: Class): Promise<Class>;
  findAllClasses(data: IFindAllClass): Promise<Class[]>;
}
