export interface IEntrepreneur {
  nickname: String;
  name: String;
  picture: String;
  email: String;
  email_verified: Boolean;
  sub: String;
}

export class Entrepreneur implements IEntrepreneur {
  public nickname: string;
  public name: string;
  public picture: string;
  public email: string;
  public email_verified: boolean;
  public sub: string;

  constructor(nickname: string, name: string, picture: string, email: string, email_verified: boolean, sub: string) {
    this.nickname = nickname;
    this.name = name;
    this.picture = picture;
    this.email = email;
    this.email_verified = email_verified;
    this.sub = sub;
  }
}
