import { Inject, Controller, Get, Query, Body, Post, Param } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { ApiBody, BodyContentType } from '@midwayjs/swagger'
import { UserService } from '../service/user.service';
import { CatIo, CreateCatDto } from '../interface'

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/get_user')
  @Post('/get_user')
  async getUser(
    @Query('uid') uid: number,
    @Body() createCatDto: CreateCatDto
  ) {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }

  @Post('/upload')
  @ApiBody({
    description: 'this is body',
    contentType: BodyContentType.Multipart
  })
  async upload(
    @Body() createCatDto: CatIo,
    @Param('breed') breed: string
  ) {
    return { success: true, message: 'OK', data: 'hh' };
  }
}
