import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateArticleTable1668189318925 implements MigrationInterface {
  name = 'CreateArticleTable1668189318925';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`article\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(50) NOT NULL, \`content\` varchar(255) NOT NULL, \`author\` varchar(80) NOT NULL, \`creationDate\` varchar(80) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`article\``);
  }
}
