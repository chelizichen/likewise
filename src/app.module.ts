import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsEnity } from './reports/reports.enity';
// import { GoodsModule } from './goods/goods.module';
import { ReportsModule } from './reports/reports.module';
import { UserEnity } from './users/users.enity';
import { UsersModule } from './users/users.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite', // 数据库类型,
    database:'db.sqlite',
    entities:[UserEnity,ReportsEnity],
    synchronize:true

  }),ReportsModule,UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
