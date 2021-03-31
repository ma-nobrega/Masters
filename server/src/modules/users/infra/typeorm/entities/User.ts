import Class from '@modules/teachers/infra/typeorm/entities/Class';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  phone_number: string;

  @Column()
  bio: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Class, classEntity => classEntity.user)
  class: Class[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default User;
