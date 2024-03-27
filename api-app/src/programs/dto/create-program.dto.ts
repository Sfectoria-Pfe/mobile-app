import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProgramDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;
  @ApiProperty()
  @IsNotEmpty()
  imageURL: string;
  @ApiProperty()
  description?: string;

  @ApiProperty()
  @IsNumber()
  price: number;
  @ApiProperty()
  @IsNotEmpty()
  category: string;
}
