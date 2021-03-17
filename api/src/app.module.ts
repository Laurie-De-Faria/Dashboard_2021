import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OauthModule } from './oauth/oauth.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    UsersModule,
    OauthModule,
    ServicesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
