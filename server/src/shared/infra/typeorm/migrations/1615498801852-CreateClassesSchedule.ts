import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateClassesSchedule1615498801852
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'classes_schedules',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'classes_id',
            type: 'uuid',
          },
          {
            name: 'week_day',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'from',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'to',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'classes_schedules',
      new TableForeignKey({
        name: 'ClassesSchedulesClasses',
        columnNames: ['classes_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'classes',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'classes_schedules',
      'ClassesSchedulesClasses',
    );
    await queryRunner.dropTable('classes_schedules');
  }
}
