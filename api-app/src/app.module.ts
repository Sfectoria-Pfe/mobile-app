import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProgramsModule } from './programs/programs.module';
import { ModulesModule } from './modules/modules.module';
import { SessionsModule } from './sessions/sessions.module';
import { AuthModule } from './auth/auth.module';

import { PrismaService } from './prisma/prisma.service';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    UsersModule,
    PrismaModule,
    ProgramsModule,
    ModulesModule,
    SessionsModule,
    AuthModule,
    ProductModule 
  ],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
