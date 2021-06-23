import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column() 
    name: string;

    /*É possível usar um nome próprio para a string e pela entidade nomear a coluna correta
        @Column("name") 
        nameUser: string;
    */


    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { User };

// Entidade < - > ORM < - > BD
// Repositório -> Utiliza a entidade para comunicar-se ao BD
