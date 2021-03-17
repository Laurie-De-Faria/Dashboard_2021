import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';

import { DatabaseModule } from '../database/database.module';
import { servicesProviders } from './services.providers';
import { OauthModule } from 'src/oauth/oauth.module';

@Module({
  imports: [DatabaseModule, OauthModule],
  controllers: [ServicesController],
  providers: [
    ...servicesProviders,
    ServicesService
  ]
})
export class ServicesModule {}
