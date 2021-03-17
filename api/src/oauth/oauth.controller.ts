import { Controller, Get, Param, Post, Body, Delete, Query, Request, Response} from '@nestjs/common';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
    constructor(private OauthService: OauthService) {}

    // @Get('/response')
    // async test(@Request() params) {
    //     console.log(params);
    //     //const value = params.client['Symbol(async_id_symbol)'];//JSON.stringify(params.route.stack)
    //     const value = params.client._events.data;
    //     // idem with socket
    //     return `Hello -> ${value} | END`;
    // }

    @Get('/connection')
    async loginToService(@Request() req, @Response() res) {
        const service = await this.OauthService.loginService(req, res);
    }

    @Get('/connection/redirect')
    async serviceRedirection(@Request() req, @Response() res) {
        const service = await this.OauthService.redirection(req, res);

        console.log(`Response is => ${service}`);
    }

    @Get('/user/:id/access/:service')
    async getUserServiceToken(@Param('id') userId : Number, @Param('service') serviceId : Number) {
        const oauth = await this.OauthService.getUserServiceToken(userId, serviceId);
        return oauth.refresh_token;
    }
}
