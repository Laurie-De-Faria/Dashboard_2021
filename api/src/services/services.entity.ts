import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Services {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fk_user_id: number;

  @Column()
  service_id : number;

  @Column()
  widget_id : number;

  @Column()
  is_active: number;

  @Column()
  data: JSON;
}
