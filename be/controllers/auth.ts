import { compareSync } from 'bcrypt'
import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
const auth = {
    adminAuth : async (req : Request,res : Response) => {
        try {
            const {username, password,} = req.body
            const validPassword = compareSync(password,username.password)
            if(!validPassword) return res.send({status : 100})
            const token = jwt.sign({_id : username._id , role : username.role},'adminToken')
            res.send({status : 1, token})
        } catch (error) {
            res.send(error)
        }
    },
}

export default auth