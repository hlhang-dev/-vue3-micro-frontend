import TokenConstant from '../definition/token/TokenConstant'

export class TokenManagement {

  static _instance: TokenManagement

  static getInstance () {
    if (!TokenManagement._instance) {
      TokenManagement._instance = new TokenManagement()
    }
    return TokenManagement._instance
  }

  saveAccountToken (token: string) {
    uni.setStorageSync(TokenConstant.ACCOUNT_AUTH_TOKEN_LABEL, token)
  }

  getAccountToken (): string {
    return uni.getStorageSync(TokenConstant.ACCOUNT_AUTH_TOKEN_LABEL)
  }

  clearStorage () {
    uni.removeStorageSync(TokenConstant.ACCOUNT_AUTH_TOKEN_LABEL)
  }
}
