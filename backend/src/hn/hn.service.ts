import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { CreateNoticeDTO } from 'src/notice/dto/create-notice.dto';
import { NoticeService } from 'src/notice/notice.service';
import { HitDTO } from './dto/hit.dto';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class HnService {
  constructor(private httpService: HttpService, private noticeService: NoticeService) {}

  
  @Interval(3600000)
  async getArticles(): Promise<void> {
    try {
      const response = await this.httpService
      .get<any>(
        'https://hn.algolia.com/api/v1/search_by_date?query=nodejs',
      )
      .toPromise();

    const hits = response.data.hits;


    for (const hit of hits) {
      const notice = await this.noticeService.getNotice(hit.objectID)
      if(!notice){
        const newNotice: CreateNoticeDTO = {
          author: hit.author,
          _id: hit.objectID,
          created_at: hit.created_at,
          story_title: hit.story_title,
          title: hit.title,
          story_url: hit.story_url,
          url: hit.url,
          isRemoved: false,
        };
        await this.noticeService.addNotice(newNotice);
      }

      
    }

    } catch (error) {
      console.log(error)
    }
   

    

  }
}
