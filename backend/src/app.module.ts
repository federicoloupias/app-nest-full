import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticeModule } from './notice/notice.module';
import { HnModule } from './hn/hn.module';
import { ScheduleModule } from '@nestjs/schedule';
import 'dotenv/config';

// const URL = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:27017/${process.env.DATABASE_NAME}`;

const hostdb = process.env.MONGO_URL || 'localhost';

const URL = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${hostdb}:27017/admin`;

console.log('URL', URL);
@Module({
  imports: [
    MongooseModule.forRoot(URL, {
      useNewUrlParser: true,
    }),
    NoticeModule,
    HnModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
