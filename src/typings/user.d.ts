declare namespace API {
  type CurrentUser = {
    username: string;
    avatar: string;
    access: string;
  }

  type LoginParams = {
    username: string;
    password: string;
  }
}