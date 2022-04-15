import { Request, Response } from 'express'
import { Admins } from '../models'
const admin = {
    get: async (req: Request, res: Response) => {
        try {
            const data = await Admins.find({})

            res.send({ status: 1, data })
        } catch (error) {

        }
    },
    post: async (req: Request, res: Response) => {
        try {
            await Admins.create({ ...req.body })
            res.send({ status: 1 })
        } catch (error) {
            res.send(error)
        }
    },
    put: async (req: Request, res: Response) => {
        try {
            const { _id } = req.query
            
            await Admins.findByIdAndUpdate(_id, req.body)
            res.send({ status: 1 })
        } catch (error) {
            res.send(error)
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            await Admins.findByIdAndDelete(req.query._id)
            res.send({ status: 1 })
        } catch (error) {
            res.send(error)
        }
    }
}

export default admin