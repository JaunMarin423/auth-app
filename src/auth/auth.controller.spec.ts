import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { LoginDto } from './login.dto';

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile();

    authController = moduleRef.get<AuthController>(AuthController);
  });

  describe('login', () => {
    it('should return a token when valid credentials are provided', () => {
      const loginDto: LoginDto = {
        username: 'juan',
        password: 'juan',
      };

      const result = authController.login(loginDto);

      expect(result).toBeDefined();
      expect(result.token).toBeDefined();
    });

    it('should throw an UnauthorizedException when invalid credentials are provided', () => {
      const loginDto: LoginDto = {
        username: 'invalidUser',
        password: 'invalidPassword',
      };

      expect(() => {
        authController.login(loginDto);
      }).toThrowError('Credenciales inválidas');
    });
  });
});
