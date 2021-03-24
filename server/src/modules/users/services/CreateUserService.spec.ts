import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'Matheus Nobrega',
      email: 'test@test.com',
      password: '123456',
      phone_number: '123456',
    });

    expect(user).toHaveProperty('id');
  });
  it('should not be able to create two user with the same email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const userEmail = 'test@test.com';

    await createUser.execute({
      email: userEmail,
      name: 'Matheus Nobrega',
      phone_number: '169999999999',
      password: '142536',
    });

    expect(
      createUser.execute({
        email: userEmail,
        name: 'Matheus Nobrega',
        phone_number: '169999999998',
        password: '142536',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
