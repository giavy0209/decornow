export default interface User {
    email : string,
    password : string,
    name : string,
    address: string,
    phone : string,
    dob: Date | number,
    createdAt : Date| number,
}