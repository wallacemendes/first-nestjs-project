import { Hello } from './interfaces/hello.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  private readonly hellos: Hello[] = [];

  create(hello: Hello) {
    this.hellos.push(hello);
    return this.hellos;
  }

  findAll(): Hello[] {
    return this.hellos;
  }

  update(name: string, hello: Partial<Hello>) {
    const foundIndex = this.hellos.findIndex((h) => h.name === name);
    const newHello: Hello = {
      ...this.hellos[foundIndex],
      ...Object.fromEntries(Object.entries(hello)),
    };
    this.hellos.splice(foundIndex, 1, newHello);
    // Outra alternativa:
    // Object.assign(this.hellos[foundIndex], hello);
    return this.hellos;
  }

  findByName(name: string) {
    const foundHello = this.hellos.find((v) => v.name === name);
    console.log(foundHello);
    return foundHello;
  }

  delete(name: string) {
    const foundIndex = this.hellos.findIndex((h) => h.name === name);
    this.hellos.splice(foundIndex, 1);
  }
}
