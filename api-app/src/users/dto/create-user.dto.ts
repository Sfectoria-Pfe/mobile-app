import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty()
  email: string;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  avatarUrl: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  address: string;
}
