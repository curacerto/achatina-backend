import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './domain/category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DinosaurModule } from './domain/dinosaur/dinosaur.module';
import { DinosaurCategoryModule } from './domain/dinosaur-category/dinosaur-category.module';
import { DinoRangeCountModule } from './domain/dino-range-count/dino-range-count.module';
import { StatCountModule } from './domain/stat-count/stat-count.module';
import { StatRangeModule } from './domain/stat-range/stat-range.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '168.138.153.127',
      port: 3306,
      username: 'dinos',
      password: 'Rio#220515',
      database: 'dinos',
      entities: ['dist/domain/category/**/*.entities{.ts,.js}'],
      synchronize: true,
    }),
    CategoryModule,
    DinosaurModule,
    DinosaurCategoryModule,
    DinoRangeCountModule,
    StatCountModule,
    StatRangeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
