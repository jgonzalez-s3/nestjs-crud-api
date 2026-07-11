// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// const port: number = parseInt(<string>process.env.PORT) || 3306;

// export const typeormConnectionConfig: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: process.env.MYSQL_HOST,
//   port: port,
//   username: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   entities: ['dist/**/*.entity{.ts,.js}'],
//   synchronize: true,
//   timezone: 'utc',
// };
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConnectionConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'productsdb',
  entities: ['dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
};