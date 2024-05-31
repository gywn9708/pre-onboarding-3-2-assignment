const SIGN_IN_MESSAGE = {
  password: 'Incorrect password',
  email: 'Cannot find user',
} as const;

const SIGN_UP_MESSAGE = {
  password: 'Password is too short',
  email: 'Email format is invalid',
  duplicate: 'Email already exists',
} as const;

export default class HTTPError extends Error {
  constructor(
    private statusCode: number,
    public message: string,
    private data?: string
  ) {
    super(message);
  }

  get signUpMessage() {
    if (this.statusCode === 400) {
      switch (this.data) {
        case SIGN_UP_MESSAGE.email:
          this.message = '이메일 형식이 올바르지 않습니다';
          break;
        case SIGN_UP_MESSAGE.password:
          this.message = '4자이상의 비밀번호를 입력해주세요';
          break;
        case SIGN_UP_MESSAGE.duplicate:
          this.message = '이미 존재하는 계정입니다';
          break;
        default:
          throw new Error('Unknown Error');
      }
      return this.message;
    }
    throw new Error('unknown Error');
  }

  get signInMessage() {
    switch (this.statusCode) {
      case 400:
        if (this.data === SIGN_IN_MESSAGE.password) {
          this.message = '비밀번호를 확인해주세요';
        } else if (this.data === SIGN_IN_MESSAGE.email) {
          this.message = '존재하지 않는 계정입니다';
        }
        break;
      case 404:
        this.message = '잘못된 요청입니다. url을 확인해주세요';
        break;
      default:
        throw new Error('Unknown Error');
    }
    return this.message;
  }

  get APIMessage() {
    switch (this.statusCode) {
      case 401:
        this.message = 'Access Token이 만료되었습니다.';
        break;
      default:
        throw new Error('Unknown Error');
    }
    return this.message;
  }
}
