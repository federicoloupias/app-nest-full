import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { NoticeService } from '../notice.service';
import { CreateNoticeDTO } from '../dto/create-notice.dto';

@Controller('notice')
export class NoticeController {

  constructor(private noticeService: NoticeService) { }

  // Submit a notice
  @Post('/notice')
  async addNotice(@Res() res, @Body() createNoticeDTO: CreateNoticeDTO) {
    const newNotice = await this.noticeService.addNotice(createNoticeDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Notice has been submitted successfully!',
      notice: newNotice,
    });
  }

  // Fetch a particular notice using ID
  @Get('notice/:noticeID')
  async getNotice(@Res() res, @Param('noticeID') noticeID : string ) {
    const notice = await this.noticeService.getNotice(noticeID);
    if (!notice) {
        throw new NotFoundException('Notice does not exist!');
    }
    return res.status(HttpStatus.OK).json(notice);
  }

  // Fetch all notices
  @Get('/notices')
  async getNotices() { 
    const notices = await this.noticeService.getNotices();
    return notices;
  }

  // Edit a particular notice using ID
  @Put('/edit')
  async editNotice(
    @Res() res,
    @Query('noticeID') noticeID,
    @Body() createNoticeDTO: CreateNoticeDTO,
  ) {
    const editedNotice = await this.noticeService.editNotice(noticeID, createNoticeDTO);
    if (!editedNotice) {
        throw new NotFoundException('Notice does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Notice has been successfully updated',
      notice: editedNotice,
    });
  }
  // Delete a notice using ID
  @Delete('/delete')
  async deleteNotice(@Res() res, @Query('noticeID') noticeID) {
    const deletedNotice = await this.noticeService.deleteNotice(noticeID);
    if (!deletedNotice) {
        throw new NotFoundException('Notice does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Notice has been deleted!',
      notice: deletedNotice,
    });
  }
}