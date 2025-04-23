import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthInput, AuthType } from './auth.model';
import { customErrorHandler } from 'src/shared/customErrors';
import { CryptoService } from 'src/crypto/crypto.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly ormService: PrismaService,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
  ) {}

  async login(fields: AuthInput): Promise<AuthType> {
    try {
      const { email, password } = fields;

      const user = await this.ormService.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        throw new UnauthorizedException('Credenciais inválidas');
      }

      const is_correct_password = await this.cryptoService.compare(
        password,
        user.password,
      );

      if (!is_correct_password) {
        throw new UnauthorizedException('Credenciais inválidas');
      }

      const payload = { id: user.id, email: user.email };

      const token = this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET || 'my_secret_key',
        expiresIn: process.env.EXPIRED_IN || '1h',
      });

      const data = {
        token,
      };

      return data;
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }
}
