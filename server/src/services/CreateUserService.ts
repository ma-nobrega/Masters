import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  password: string;
  phone_number: string;
  email: string;
  avatar: string;
  bio: string;
}

class CreateUserService {
  public async execute({
    name,
    password,
    phone_number,
    email,
    avatar,
    bio,
  }: Request): Promise<User> {
    const UsersRepository = getRepository(User);

    const checkUserExists = await UsersRepository.findOne({
      where: { email },
    });
    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = UsersRepository.create({
      name,
      email,
      password: hashedPassword,
      phone_number,
      avatar,
      bio,
    });
    await UsersRepository.save(user);

    return user;
  }
}
export default CreateUserService;
