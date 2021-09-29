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

interface Response<T> {
  code: number;
  data: T;
  message: string;
  success: boolean;
}