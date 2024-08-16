export enum requestContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // json
  TEXT = 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  上传
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

export enum responseCodeEnum {
  SUCCESS_CODE = 0,
  LOGIN_CODE = -1,
  ERROR_CODE = -2,
}

export enum requestConfigEnum {
  BASE_URL = '/api',
  TIME_OUT = 100000,
  TOKEN_NAME = 'Authorization',
}
