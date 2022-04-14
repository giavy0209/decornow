import {Request, Response} from 'express'
import { Admins } from '../models'
const admin = {
    get : () => {

    },
    post : async (req : Request,res : Response) => {
        try {
            const {username, password, role} = req.body
            await Admins
        } catch (error) {
            res.send(error)
        }
    },
    patch : () => {

    },
    delete : () => {

    }
}