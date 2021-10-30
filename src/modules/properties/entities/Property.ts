import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("properties")
class Property {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    country: string;

    @Column()
    state: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @Column()
    number: number;

    @Column()
    price: number;

    @Column()
    rooms: number;

    @Column()
    area: number;

    @Column({ type: "simple-json" })
    images?: string[];

    constructor() {
        this.id = uuid();
    }
}

export { Property };
