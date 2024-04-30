import { IAPIError } from "../requester"

export class APPError {
    name
    message
    data
    constructor(error: IAPIError) {
        this.name = error
        this.message = error.message,
            this.data = error.data
    }

};

//extend other here 
export class ValidationError extends APPError {
    constructor(error: IAPIError) {
        super(error);
    }
}
