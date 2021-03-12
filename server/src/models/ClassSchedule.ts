import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Class from './Class';

@Entity('classes_schedules')
class ClassesSchedules {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('integer')
  week_day: number;

  @Column('integer')
  from: number;

  @Column('integer')
  to: number;

  @Column()
  class_id: string;

  @ManyToOne(() => Class)
  @JoinColumn({ name: 'class_id' })
  class: Class;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default ClassesSchedules;
