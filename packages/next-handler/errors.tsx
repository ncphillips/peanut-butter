export abstract class HttpError extends Error {
  code: number = 500
}

export class NotFoundError extends HttpError {
  code = 404
}

export class UnauthorizedError extends HttpError {
  code = 401
}

export class NotImplemented extends HttpError {
  code = 501
}
