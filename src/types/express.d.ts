import { AuthToken } from 'src/auth/auth.model';

declare module 'express-serve-static-core' {
  interface Request {
    user?: AuthToken;
  }
}
