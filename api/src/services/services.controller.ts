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
}
