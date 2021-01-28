import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticeModule } from './notice/notice.module';
import { HnModule } from './hn/hn.module'
import { ScheduleModule } from '@nestjs/schedule';
import 'dotenv/config';

const URL = process.env.MONGO_URI

@Module({
  imports: [
  
  MongooseModule.forRoot(URL,
      {
        useNewUrlParser: true
      }), NoticeModule, HnModule,
      ScheduleModule.forRoot()

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
