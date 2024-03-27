import { PartialType } from '@nestjs/swagger';
import { CreateAuthDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  email: string;
  fullName: string;
  password: string;
  avatarUrl: string;
  phone: string;
  address: string;
}
