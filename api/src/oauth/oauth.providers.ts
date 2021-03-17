import { Connection } from 'typeorm';
import { Oauth } from './oauth.entity';

export const oauthProviders = [
  {
    provide: 'OAUTH_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Oauth),
    inject: ['DATABASE_CONNECTION'],
  },
];