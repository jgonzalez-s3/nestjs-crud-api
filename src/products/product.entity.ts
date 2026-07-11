import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({
  type: 'varchar',
  length: 255,
  nullable: false,
})
name: string;

  @Column({
  type: 'numeric',
  precision: 10,
  scale: 2,
  nullable: false,
})
price: number;

  @Column({
    type: 'text',
  })
  description: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updated_at: Date;
}
