enum errorCode {
  SUCCESS = 200,  // 成功
  TOKEN_NULL = 400,  // 请求没有 token 信息
  FORBIDDEN = 403,  // 授权失败，登录过期
  API_NOT_FOUND = 404,  // 接口不存在
  SERVER_ERROR = 500, // 服务器错误
  REQUEST_TOO_FAST = 6000, // 请求频繁
  HOST_NOT_AVAILABLE = 6001, // 非法主机
}

export default errorCode
