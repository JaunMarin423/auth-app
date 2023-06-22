import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './login.dto';
import * as jwt from 'jsonwebtoken';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    const { username, password } = loginDto;

    if (username !== 'juan' || password !== 'juan'){
      throw new UnauthorizedException('Credenciales inválidas');
      
    }
    const token = this.generateAuthToken(username);
    return {
      token,
    };

  }

  private generateAuthToken(username: string): string {
    const secretKey = 'tu_clave_secreta'; // Reemplaza esto con tu propia clave secreta
    const expiresIn = '1h'; // El token expirará en 1 hora (puedes ajustarlo según tus necesidades)

    const payload = { username }; // Datos que quieres incluir en el token

    const token = jwt.sign(payload, secretKey, { expiresIn });

    return token;
  }
}
