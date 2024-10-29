import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // Endpoint: /users
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // Endpoint: /users/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post('/register')
  create(@Body(ValidationPipe) createUserDto: Prisma.UserCreateInput) {
    return this.userService.create(createUserDto);
  }
}
