import { Request, Response } from 'express'
import { Users } from 'models'
const user = {

    get: async (req: Request, res: Response) => {
        try {
            const {_id} = req.body.payload
            const user = await Users.findById(_id)
            res.send({status : 1, data :user})
        } catch (error) {
            res.send(error)

        }
    },
    post: async (req: Request, res: Response) => {
        try {
            await Users.create({ ...req.body })
            res.send({ status: 1 })
        } catch (error) {
            res.send(error)
        }
    },
}

export default user