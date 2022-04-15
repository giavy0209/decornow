import { Schema, model } from 'mongoose'
import { User } from 'interfaces'

const UsersSchema = new Schema<User>({
    email : {type : String, required : true,unique : true},
    password : {type : String, required : true},
    dob : {type : Date,},
    address : {type : String},
    name : {type : String},
    phone : {type : String},
}, {
    timestamps: true
})

const Users = model<User>('users', UsersSchema)

export default Users