import { HttpModule, Module, OnModuleInit } from '@nestjs/common';
import { HnService } from './hn.service';
import { HnController } from './controller/hn.controller';
import { NoticeModule } from 'src/notice/notice.module';

@Module({
  controllers: [HnController],
  imports: [
  HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    NoticeModule,
  ],
  providers: [HnService],
})
export class HnModule implements OnModuleInit {
  constructor(private hnService: HnService) {}
  onModuleInit() {
    this.hnService.getArticles();
  }
}
