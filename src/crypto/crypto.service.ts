import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptoService {
  private readonly saltRounds = 10;

  async hash(data: string): Promise<string> {
    return bcrypt.hash(data, this.saltRounds);
  }

  async compare(data: string): Promise<boolean> {
    const hash = process.env.CRYPT_KEY;

    return bcrypt.compare(data, hash);
  }
}
