import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Services } from './services.entity';
import { OauthService } from '../oauth/oauth.service';
// import fetch from 'cross-fetch';
const fetch = require('node-fetch');

@Injectable()
export class ServicesService {
    constructor(
        @Inject('SERVICES_REPOSITORY')
        private servicesRepository: Repository<Services>,
        private readonly OauthService: OauthService
    ) {}

    async addWidget(widget : Services): Promise<Services> {
        return this.servicesRepository.save(widget);
    }

    /// --- WIDGETS MICROSFT --- ///
    // Widget display last n mails order by date received + just field subject, from and date to received
    async getOauthdata(userId, serviceId) {
        return await this.OauthService.getUserServiceToken(userId, serviceId);
    }
    
    async askInfosEmail(userId, nbrMails) {
        const userOauth = await this.getOauthdata(userId, 1);
        let emails;

        try {
            emails = await fetch(`https://graph.microsoft.com/v1.0/me/mailfolders/inbox/messages?$select=subject,from,receivedDateTime&$top=${nbrMails}&$orderby=receivedDateTime%20DESC`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${userOauth.refresh_token}`,
                },
            }).then(res => res.json());
            console.log(emails);
        } catch(e) {
            console.log(e);
        }
        return emails;
    }

    // Widget ??? calendar (next event) ?


    /// --- WIDGETS METEO --- ///
    // Widget temperature of a specific town
    
    // Widget ???
}
