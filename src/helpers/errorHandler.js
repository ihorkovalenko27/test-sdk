export class ApiError extends Error {
  constructor(message, code) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
  }
}

export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
  }
}
