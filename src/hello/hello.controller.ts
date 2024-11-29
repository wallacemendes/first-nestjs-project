import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HelloService } from './hello.service';
import { Hello } from './interfaces/hello.interface';
import { HelloDto } from './dto/hello.dto';
import { UpdateHelloDto } from './dto/update-hello.dto';

@Controller('api/hellos')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  async findAll(): Promise<Hello[]> {
    return this.helloService.findAll();
  }

  @Get(':name')
  async findById(@Param('name') name: string): Promise<Hello | string> {
    console.log(name);
    return this.helloService.findByName(name) ?? 'Not Found';
  }

  @Post()
  async create(@Body() helloBody: HelloDto): Promise<Hello[]> {
    const hello: Hello = { ...helloBody };
    return this.helloService.create(hello);
  }

  @Put(':name')
  async update(
    @Param('name') name: string,
    @Body() helloBody: UpdateHelloDto,
  ): Promise<Hello[]> {
    const newHello: UpdateHelloDto = { ...helloBody };
    return this.helloService.update(name, newHello);
  }

  @Delete(':name')
  async delete(@Param('name') name: string): Promise<string> {
    this.helloService.delete(name);
    return 'Hello deleted.';
  }
}
