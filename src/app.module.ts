import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoEnity } from './favo/favo.enity';
import { FavoModule } from './favo/favo.module';
// import { GoodsModule } from './goods/goods.module';
import { SongsEnity } from './songs/songs.enity';
import { SongsModule } from './songs/songs.module';
import { UserEnity } from './users/users.enity';
import { UsersModule } from './users/users.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite', // 数据库类型,
    database:'db.sqlite',
    entities:[UserEnity,SongsEnity,FavoEnity],
    synchronize:true

  }),UsersModule,SongsModule,FavoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
