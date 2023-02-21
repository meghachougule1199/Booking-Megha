export class BookingDto {

    name:string;
    mobileNumber:string;
    dateOfBooking:string;
    sourceAirport:string;
    destinationAirport:string;
    
    constructor(
        name:string,
        mobileNumber:string,
        dateOfBooking:string,
        sourceAirport:string,
        destinationAirport:string,
    ){
        this.name=name;
        this.mobileNumber=mobileNumber;
        this.dateOfBooking=dateOfBooking;
        this.sourceAirport=sourceAirport;
        this.destinationAirport=destinationAirport;
    }
}
