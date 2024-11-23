/**
 * Custom error class to represent API errors with additional information.
 * Extends the built-in `Error` class
 */
export class FetchError extends Error {
  message: string;
  request_id: string;
  status: string;

  /**
   * Constructs a new `FetchError` instance.
   *
   * @param error - The error message.
   * @param request_id - The request ID.
   * @param status - The error status.
   */
  constructor({
    error,
    request_id,
    status,
  }: {
    error: string;
    request_id: string;
    status: string;
  }) {
    super(error); // Call the parent class constructor (Error)
    this.message = error;
    this.request_id = request_id;
    this.status = status;
  }
}
