import { SystemMessages } from "../utils";

export class HandleErrorService {
  handleError(err: any) {
    const errors: { [key: number]: unknown } = {
      400: err.error,
      401: SystemMessages.unauthorized,
      404: SystemMessages.recordNotFound,
      0: SystemMessages.InternalServerError,
      500: SystemMessages.InternalServerError,
      502: SystemMessages.errorBadGatewayMessage,
    };
    const msg =
      'cod' in err.error
        ? err.error['message'] ?? errors[err.status]
        : errors[err.status] ?? err.error;

    return msg;
  }
}
