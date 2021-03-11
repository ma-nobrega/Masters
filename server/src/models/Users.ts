import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column('string')
  name: string;

  @Column('string')
  avatar: string;

  @Column('string')
  phoneNumber: string;

  @Column('string')
  bio: string;

  @Column('string')
  email: string;

  @Column('string')
  password: string;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default User;
