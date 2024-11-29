import { PartialType } from '@nestjs/mapped-types';
import { HelloDto } from './hello.dto';

export class UpdateHelloDto extends PartialType(HelloDto) {}
