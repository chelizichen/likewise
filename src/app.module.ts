import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsEnity } from './reports/reports.enity';
// import { GoodsModule } from './goods/goods.module';
import { ReportsModule } from './reports/reports.module';
import { SongsEnity } from './songs/songs.enity';
import { SongsModule } from './songs/songs.module';
import { UserEnity } from './users/users.enity';
import { UsersModule } from './users/users.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite', // 数据库类型,
    database:'db.sqlite',
    entities:[UserEnity,ReportsEnity,SongsEnity],
    synchronize:true

  }),ReportsModule,UsersModule,SongsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
