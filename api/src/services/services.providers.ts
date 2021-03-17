import { Connection } from 'typeorm';
import { Services } from './services.entity';

export const servicesProviders = [
  {
    provide: 'SERVICES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Services),
    inject: ['DATABASE_CONNECTION'],
  },
];