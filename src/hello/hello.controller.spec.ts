import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { HelloDto } from './dto/hello.dto';
import { Hello } from './interfaces/hello.interface';

describe('AppController', () => {
  let helloController: HelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();

    helloController = app.get<HelloController>(HelloController);
  });

  const requestBody: HelloDto = {
    name: 'Wallace',
    message: 'Olá, Wallace',
  };
  const responseBody: Hello[] = [
    {
      name: 'Wallace',
      message: 'Olá, Wallace',
    },
  ];

  describe('/post endpoint', () => {
    it(`should return responseBody`, async () => {
      const result = await helloController.create(requestBody);
      console.log(result);
      expect(result).toEqual(responseBody);
    });
  });

  describe('/get Find all endpoint', () => {
    it('should return list of hellos', async () => {
      await helloController.create(requestBody);
      expect(await helloController.findAll()).toEqual(responseBody);
    });
  });

  describe('/put endpoint', () => {
    const expectedResponse: Hello[] = [
      {
        name: 'Adriana',
        message: 'Olá, Wallace',
      },
    ];

    it('should replace name to "Adriana"', async () => {
      await helloController.create(requestBody);
      expect(
        await helloController.update('Wallace', { name: 'Adriana' }),
      ).toEqual(expectedResponse);
    });
  });
});
