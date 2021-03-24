import AppError from '@shared/errors/AppError';
import FakeClassesRepository from '../repositories/fakes/FakeClassesRepository';
import CreateClassService from './CreateClassService';

describe('CreateClassService', () => {
  it('should be able to create a new class', async () => {
    const fakeClassesRepository = new FakeClassesRepository();
    const createClass = new CreateClassService(fakeClassesRepository);

    const lesson = await createClass.execute({
      cost: 20,
      subject: 'Biologia',
      user_id: '1232555612',
    });
    expect(lesson).toHaveProperty('id');
    expect(lesson.user_id).toBe('1232555612');
  });
  it('should not be able to create two class with the same name', async () => {
    const fakeClassesRepository = new FakeClassesRepository();
    const createClass = new CreateClassService(fakeClassesRepository);

    const classSubject = 'Biologia';

    await createClass.execute({
      cost: 20,
      subject: classSubject,
      user_id: '1232555612',
    });

    expect(
      createClass.execute({
        cost: 20,
        subject: classSubject,
        user_id: '1232555612',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
