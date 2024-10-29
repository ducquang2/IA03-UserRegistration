import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.user.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async create(createUserDto: Prisma.UserCreateInput) {
    const checkUser = await this.databaseService.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (checkUser && checkUser.id)
      throw new ConflictException('User existed!!');

    return this.databaseService.user.create({
      data: createUserDto,
    });
  }
}
