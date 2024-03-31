import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProgramsModule } from './programs/programs.module';
import { ModulesModule } from './modules/modules.module';
import { SessionsModule } from './sessions/sessions.module';
import { AuthModule } from './auth/auth.module';
import { MediasModule } from './medias/medias.module';
import { MediasService } from './medias/medias.service';
import { PrismaService } from './prisma/prisma.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    ProgramsModule,
    ModulesModule,
    SessionsModule,
    AuthModule,
    MediasModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload'), // Adjust the path based on your project structure
      serveRoot: 'upload', // Update rootPath based on your project structure // URL path prefix for accessing files
    }),
  ],
  controllers: [AppController],
  providers: [AppService,MediasService,PrismaService],
})
export class AppModule {}
