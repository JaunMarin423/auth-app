import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly claveSecreta = 'mi_clave_secreta'; // Cambia por tu clave secreta

  generarToken(usuarioId: number): string {
    const payload = { usuarioId };
    const token = jwt.sign(payload, this.claveSecreta, { expiresIn: '1h' });
    return token;
  }
}
