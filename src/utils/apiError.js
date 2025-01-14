class ApiError extends Error {

    constructor(
        statusCode,
        message = "Something went wrong",
        error = [],
        stack = ""
    ){

        this.message = message
        this.error = error
        this.statusCode = statusCode
        this.success = false
        this.stack = stack

        if(!stack){
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }