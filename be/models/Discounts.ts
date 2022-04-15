import { Schema, model } from 'mongoose'
import { Discount } from '../interfaces'

const DiscountSchema = new Schema<Discount>({
    min : {type : Number},
    max : {type : Number},
    total : {type : Number},
    left : {type : Number},
    name : {type : String},
    code : {type : String},
    status : {type : Number, default : 1}, //1 : active, 2 out date, 3 oout of order
    expire : {type : Date},
    value : {type : Number,},
    discountBy : {type : String},
    createBy : {type : Schema.Types.ObjectId, ref : 'admins'},
}, {
    timestamps: true
})

const Discounts = model<Discount>('discounts', DiscountSchema)

export default Discounts