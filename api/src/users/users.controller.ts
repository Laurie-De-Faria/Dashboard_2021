import { Controller, Get, Param, Post, Body, Delete, Query, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Get()
    async getUsers() {
        const users = await this.usersService.getUsers();
    }
    
    @Get(':userId')
    async getUser(@Param('userId') userId : Number) {
        const user = await this.usersService.getUserById(userId);
        return user;
    }
    
    @Get('mail/:username')
    async getUserByEmail(@Param('username') username : String) {
        const user = await this.usersService.getUserByEmail(username);
        return user;
    }

    @Post('/add')
    async addUser(@Body() user : User) {
        console.log(`Request => ${user}`);
        return await this.usersService.addUser(user);
    }
    
    // @Delete()
    // async deleteUser(@Query() query) {
    //     const users = await this.usersService.deleteUser(query.userId);
    //     return users;
    // }
}
