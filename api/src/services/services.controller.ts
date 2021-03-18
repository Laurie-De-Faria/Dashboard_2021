import { Controller, Get, Param, Post, Body, Delete, Query, Request, Response} from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
    constructor(private servicesService: ServicesService) {}

    @Get('/emails/:userId/:nbr')
    async lastMessagesMicrosoftEmail(@Param('userId') userId : Number, @Param('nbr') nbrMails : Number) {
        const emails = await this.servicesService.askInfosEmail(userId, nbrMails);
        return emails;
    }

    @Get('/calendar/:userId/:start/:end')
    async calendarMicrosoft(@Param('userId') userId : Number, @Param('start') start : Date, @Param('end') end : Date) {
        const events = await this.servicesService.getEvents(userId, start, end);
        return events;
    }

    @Get('/cinema/similar/:userId/:movieId')
    async similarMovies(@Param('userId') userId : Number, @Param('movieId') movieId : Number) {
        const movies = await this.servicesService.getSimilarMovies(movieId);
        return movies;
    }

    @Get('/cinema/videos/:userId/:movieId')
    async videoMovies(@Param('userId') userId : Number, @Param('movieId') movieId : Number) {
        const movies = await this.servicesService.getVideosOfMovie(movieId);
        return movies;
    }

    @Get('/cinema/popular')
    async popularMovies() {
        const movies = await this.servicesService.getPopularMovies();
        return movies;
    }
}