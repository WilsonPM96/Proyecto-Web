import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FotoEntity } from '../Fotos/foto.entity';

@Entity('web_ramos_usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({length: 50})
  nombre: string;
  @OneToMany(type => FotoEntity, fotoEntity => fotoEntity.usuario)
  fotos: FotoEntity[];
}