import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProgramsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateProgramDto) {
    
    return await this.prisma.program.create({
      data:dto,
    });
  }

  async findAll() {
    return await this.prisma.program.findMany({
      include: {
        ProgramModule: {
          include: {
            module: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.program.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, updateProgramDto: UpdateProgramDto) {
    return `This action updates a #${id} program`;
  }

  remove(id: number) {
    return `This action removes a #${id} program`;
  }
}
type Person = {
  id: String;
};
interface Product {
  id?: Number;
  name: any[];
  reacts?: String[];
}
let khalil: Product;
khalil = { name: ['value'], id: 5 };
