import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import Classes from './Classes';

@Entity('classes_schedules')
class ClassesSchedules {
  @PrimaryColumn('uuid')
  id: string;

  @Column('string')
  subject: string;

  @Column('string')
  cost: string;

  @Column()
  class_id: string;

  @ManyToOne(() => Classes)
  @JoinColumn({ name: 'class_id' })
  class: Classes;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default ClassesSchedules;
