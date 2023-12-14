import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'varchar', length: 50 })
    title: string;
    @Column({ type: 'boolean', default:false })
    isCompleted: boolean;

}
