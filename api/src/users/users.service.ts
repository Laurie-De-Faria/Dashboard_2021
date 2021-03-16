import { Injectable, HttpException, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

// import { USERS } from './users.mock';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {}
    // users = USERS;

    async getUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async getUser(mail : String, password : String): Promise<User> {
        return this.userRepository.findOne({ where: { mail: mail, password: password } });
    }

    async getUserById(userId : Number): Promise<User> {
        return this.userRepository.findOne({ where: { id: userId } });
    }

    async getUserByEmail(mail : String): Promise<User> {
        return this.userRepository.findOne({ where: { mail: mail } });
    }

    async addUser(user : User): Promise<User> {
        return this.userRepository.save(user);
    }

    // deleteUser(userId): Promise<any> {
    //     const id = Number(userId);

    //     return new Promise(resolve => {
    //         const index = this.users.findIndex(user => user.id === id);

    //         if (index === -1) {
    //             throw new HttpException('Course does not exist', 404);
    //         }
    //         this.users.splice(index, 1);
    //         resolve(this.users);
    //     });
    // }
}
