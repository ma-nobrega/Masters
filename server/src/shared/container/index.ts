import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IClassesRepository from '@modules/teachers/repositories/IClassesRepository';
import ClassesRepository from '@modules/teachers/infra/typeorm/repositories/ClassesRepository';
import IClassesSchedulesRepository from '@modules/teachers/repositories/IClassesSchedulesRepository';
import ClassesSchedulesRepository from '@modules/teachers/infra/typeorm/repositories/ClassesSchedulesRepository';
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  ClassesRepository,
);

container.registerSingleton<IClassesSchedulesRepository>(
  'ClassesSchedulesRepository',
  ClassesSchedulesRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
