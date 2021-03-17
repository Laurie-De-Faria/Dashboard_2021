import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Oauth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fk_user_id: number;

  @Column()
  type: number;

  @Column('text')
  refresh_token: string;

  @Column('text')
  token: string;

  @Column({ type: 'date' })
  expires_at: Date;
}
