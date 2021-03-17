import { Module } from '@nestjs/common';
import { OauthController } from './oauth.controller';
import { OauthService } from './oauth.service';

import { DatabaseModule } from '../database/database.module';
import { oauthProviders } from './oauth.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [OauthController],
    providers: [
        ...oauthProviders,
        OauthService
    ],
    exports: [OauthService]
})
export class OauthModule {}
