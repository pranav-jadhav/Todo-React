import { Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name: 'todo'
})
export class Todo {
    @PrimaryColumn({type: 'uuid', length: 36})
    id: string | undefined;

    @PrimaryColumn({type: 'varchar', length: 36})
    title: string | undefined;

    @PrimaryColumn({type: 'text'})
    description: string | undefined;

    @PrimaryColumn({type: 'boolean'})
    isCompleted: boolean | undefined;

    @PrimaryColumn({type: 'timestamp'})
    createdAt: Date | undefined;

    @ManyToOne(() => User, user => user.todos)
    user: User | undefined;
}

