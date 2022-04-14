import { Schema, model } from 'mongoose'
import { IAdmin } from '../interfaces'

const AdminSchema = new Schema<IAdmin>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    role : [{type : Number}],
}, {
    timestamps: true
})

const Admins = model<IAdmin>('admins', AdminSchema)

export default Admins