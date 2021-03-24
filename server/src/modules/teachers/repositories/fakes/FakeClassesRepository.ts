import IClassesRepository from '@modules/teachers/repositories/IClassesRepository';
import ICreateClassDTO from '@modules/teachers/dtos/ICreateClassDTO';
import Class from '@modules/teachers/infra/typeorm/entities/Class';
import { uuid } from 'uuidv4';

class ClassesRepository implements IClassesRepository {
  private classes: Class[] = [];

  public async findBySubject(subject: string): Promise<Class | undefined> {
    const findClass = this.classes.find(lesson => lesson.subject === subject);
    return findClass;
  }

  public async create({
    subject,
    cost,
    user_id,
  }: ICreateClassDTO): Promise<Class> {
    const lesson = new Class();

    Object.assign(lesson, {
      id: uuid(),
      subject,
      cost,
      user_id,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.classes.push(lesson);
    return lesson;
  }

  public async save(lesson: Class): Promise<Class> {
    const classIndex = this.classes.findIndex(
      findIndex => findIndex.id === lesson.id,
    );

    this.classes[classIndex] = lesson;

    return lesson;
  }
}

export default ClassesRepository;
