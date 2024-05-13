class ApiError extends Error {
  constructor(
    StatusCode,
    message = "Something Went Wrong",
    stack = "",
    errors = []
  ) {
    //overwrite
    super(message);
    this.StatusCode = StatusCode;
    this.errors = errors;
    this.message = message;
    this.data = null;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export {ApiError}
