import {Types} from 'mongoose'
export default interface Discount {
    min : number,
    max : number,
    total : number,
    left : number,
    status : number,
    name : string,
    code : string,
    expire : Date | number,
    discountBy : string,
    value : number,
    createBy : Types.ObjectId,
}