import { Discounts } from "models"
import { Request, Response } from 'express'

const discount = {
    get: async (req: Request, res: Response) => {
        const { createBy, createFrom, createTo, status, skip, limit } = req.query

        const query: { [k: string]: any } = {}

        if (createBy) query.createBy = createBy

        if (new Date(createFrom as string).getTime()) {
            query.createdAt = { $gt: new Date(createFrom as string) }
        }

        if (new Date(createTo as string).getTime()) {
            query.createdAt = { $gt: new Date(createTo as string) }
        }

        if (status) {
            query.status = Number(status)
        }

        const data = await Discounts.find(query)
            .sort({
                createdAt: -1
            })
            .skip(Number(skip) || 0)
            .limit(Number(limit) || 20)
            .populate('createBy')

        const total = await Discounts.countDocuments(query)
        res.send({ status: 1, data, total })
    },
    post: async (req: Request, res: Response) => {
        const { min = 0, max = 0, total = 10, expire = Date.now(), discountBy = 'fixed', value = 10,name ="" , code = Date.now() } = req.body
        const payload = req.body.payload

        await Discounts.create({
            min,
            max,
            total,
            left : total,
            expire,
            discountBy,
            value,
            createBy: payload._id,
            name,code
        })
        res.send({ status: 1 })
    },
    put: async (req: Request, res: Response) => {
        const {_id} = req.query
        await Discounts.findByIdAndUpdate(_id , req.body)
        res.send({status : 1})
    },
    delete: async (req: Request, res: Response) => {
        const {_id} = req.query
        await Discounts.findByIdAndDelete(_id,)
        res.send({status : 1})
    },
}

export default discount