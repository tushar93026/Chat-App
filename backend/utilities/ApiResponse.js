class ApiResponse {
    constructor(statusCode,data,message="Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
        // learn server status codes
        // < 400 because api response
        // for > 400 api error
    }
}

export {ApiResponse}