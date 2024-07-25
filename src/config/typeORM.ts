import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORM = (): TypeOrmModuleOptions => {
  return {
    // type: 'postgres',
    // host: 'localhost',
    // port: 5432,
    // username: 'postgres',
    // password: 'root',
    // database: 'bootcamp2024',
    // entities: ['dist/**/*.entity.{ts,js}'],
    // synchronize: true,
    // logging: true,

    // type: 'postgres',
    // host: 'localhost',
    // port: 5431,
    // username: 'postgres',
    // password: 'a',
    // database: 'mydb',
    // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    // synchronize: true,

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'usuarios',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
  };
};
