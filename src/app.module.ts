import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './domain/category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '168.138.153.127',
      port: 3306,
      username: 'dinos',
      password: 'Rio#220515',
      database: 'dinos',
      entities: ['dist/domain/category/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
