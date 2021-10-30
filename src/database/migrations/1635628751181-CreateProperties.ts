import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProperties1635628751181 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "properties",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },

                    {
                        name: "name",
                        type: "varchar",
                    },

                    {
                        name: "description",
                        type: "varchar",
                    },

                    {
                        name: "country",
                        type: "varchar",
                    },

                    {
                        name: "state",
                        type: "varchar",
                    },

                    {
                        name: "city",
                        type: "varchar",
                    },

                    {
                        name: "street",
                        type: "varchar",
                    },

                    {
                        name: "number",
                        type: "integer",
                    },
                    {
                        name: "price",
                        type: "numeric",
                    },
                    {
                        name: "rooms",
                        type: "integer",
                    },
                    {
                        name: "area",
                        type: "integer",
                    },
                    {
                        name: "images",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("properties");
    }
}
