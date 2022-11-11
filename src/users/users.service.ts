import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ email: email });
  }

  saveUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }
}
