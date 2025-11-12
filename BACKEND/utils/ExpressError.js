class ExpressError extends Error{
    constructor(statusCode,message){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.name = 'ExpressError';
    }
}

module.exports=ExpressError;