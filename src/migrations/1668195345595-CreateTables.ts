import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1668195345595 implements MigrationInterface {
    name = 'CreateTables1668195345595'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
    }

}
