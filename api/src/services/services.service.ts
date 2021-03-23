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

    async removeWidget(widgetUniqueId : Number) {
        const id = Number(widgetUniqueId);

        return this.servicesRepository.delete({id: id});
    }

    async getWidgets(userId : Number): Promise<Services[]> {
        return this.servicesRepository.find({ where: { fk_user_id: userId } });
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

    // Widget calendar (events between specific datetimes (2019-01-01T19:00:00-08:00)) ?
    async getEvents(userId, start_datetime, end_datetime) {
        const userOauth = await this.getOauthdata(userId, 1);
        let events;

        try {
            events = await fetch(`https://graph.microsoft.com/v1.0/me/calendar/calendarView?startDateTime=${start_datetime}&endDateTime=${end_datetime}?`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${userOauth.refresh_token}`,
                },
            }).then(res => res.json());
            console.log(events);
        } catch(e) {
            console.log(e);
        }
        return events;
    }


    /// --- WIDGETS CINEMA (The Movie Database API) --- ///
    // Widget similar movies of a specific movie
    // /find/{external_id}
    // popular films -> https://api.themoviedb.org/3/movie/popular?api_key=${process.env.CINEMA_API_KEY}
    // movieId -> 89=IndianaJonesAndTheLastCrusade | 12=FindingNemo
    async getPopularMovies() {
        let movies;

        try {
            movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.CINEMA_API_KEY}`, {
                headers: {
                    Accept: 'application/json',
                },
            }).then(res => res.json());
            console.log(movies);
        } catch(e) {
            console.log(e);
        }
        return movies;
    }

    async getSimilarMovies(movieId) {
        let movies;

        try {
            movies = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.CINEMA_API_KEY}&language=en-US&page=1`, {
                headers: {
                    Accept: 'application/json',
                },
            }).then(res => res.json());
            console.log(movies);
        } catch(e) {
            console.log(e);
        }
        return movies;
    }

    // Widget video of a movies
    async getVideosOfMovie(movieId) {
        let videos;

        try {
            videos = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.CINEMA_API_KEY}&language=en-US`, {
                headers: {
                    Accept: 'application/json',
                },
            }).then(res => res.json());
            console.log(videos);
        } catch(e) {
            console.log(e);
        }
        return videos;
    }
}
