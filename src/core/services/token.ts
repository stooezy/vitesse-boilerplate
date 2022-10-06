import { BaseApiService } from './api'

export class TokenService extends BaseApiService {
  protected PATH = '/token/auth'
}

export class RefreshTokenService extends BaseApiService {
  protected PATH = '/refresh-token'
}

export class TokenHealthService extends BaseApiService {
  protected PATH = '/token/auth'
}
