"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const custom_error_1 = require("./custom-error");
class RequestValidationError extends custom_error_1.CustomError {
    constructor(errors) {
        // here writing private is equivalient to this.errors=errors and declaring the errors variable in top
        super("Invalid request parameters");
        this.errors = errors;
        this.statusCode = 400;
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map((err) => {
            return { message: err.msg, field: err.param };
        });
    }
}
exports.RequestValidationError = RequestValidationError;
