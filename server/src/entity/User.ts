import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Todo } from "./Todo";

@Entity({
    name: 'user'
})
export class User {
    @PrimaryColumn({type: 'varchar', length: 50})
    email: string | undefined;

    @Column({type: 'text'})
    password: string | undefined;

    @Column({type: 'text'})
    name: string | undefined;

    @Column({type: 'text'})
    surname: string | undefined;

    @Column({type: 'text'})
    phone: string | undefined;

    @OneToMany(() => Todo, todo => todo.user)
    todos: Todo[] | undefined;
}