enum httpCodeStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500,
}

const estado: httpCodeStatus = httpCodeStatus.OK;

console.log(httpCodeStatus[estado]);