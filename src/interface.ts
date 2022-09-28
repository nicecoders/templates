/**
 * @description User-Service parameters
 */
import { ApiProperty } from "@midwayjs/swagger";

export interface IUserOptions {
  uid: number;
}

export class CreateCatDto {
  @ApiProperty({ example: 'Kitty', description: '名称'})
  name: string;

  @ApiProperty({ example: '1', description: '年龄'})
  age: number;

  @ApiProperty({ example: 'bbbb', description: '职位'})
  breed: string;
}

export class CatIo {
  @ApiProperty({ example: 'bbbb', description: '职位'})
  breed: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: '文件上传'
  })
  file: any;
}
