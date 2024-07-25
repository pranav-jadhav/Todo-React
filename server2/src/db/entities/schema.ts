import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column()
    firstName: string | undefined

    @Column()
    lastName: string | undefined

    @Column()
    isActive: boolean | undefined

    @Column()
    email: string | undefined

    @Column()
    password: string | undefined

    @OneToMany(() => Todo, todo => todo.user)
    todos: Todo[] | undefined
}

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column()
    title: string | undefined

    @Column()
    description: string | undefined

    @Column()
    isComplete: boolean | undefined

    @ManyToOne(() => User, user => user.todos)
    user: User | undefined
}