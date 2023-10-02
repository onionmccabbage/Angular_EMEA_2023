export class StatusObj {

    status: string
    timestamp: Date

    // set initial values for the class properties
    constructor (paramStatus:string){
        this.status = paramStatus
        this.timestamp = new Date()
    }


}