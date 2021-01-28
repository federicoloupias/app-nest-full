import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticeController } from './controller/notice.controller';
import { NoticeService } from './notice.service';
import { NoticeModel } from './schema/notice.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Notice', schema: NoticeModel, collection: 'hackerNews' }])],
    controllers: [NoticeController],
    providers: [NoticeService],
    exports: [NoticeService]

})
export class NoticeModule {}
