class ExpressError extends Error {
  constructor(message, statusCode) {
    super(message);          // sets error message
    this.statusCode = statusCode; // HTTP status code
  }
}

module.exports = ExpressError;
