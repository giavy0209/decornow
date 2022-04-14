import { NextFunction, Request, Response } from "express";
import {Model} from 'mongoose'
const apiWrapper = fn => async (req : Request,res : Response,next : NextFunction) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        next()
    }
}

export default function controllers (model : Model<any> | null , controllers : {[k : string] : any}) {
    return {
        ...(!model ? {} : {}) ,
        ...(Object.keys(controllers).reduce((obj,k) => ({
            ...obj,
            [k] : apiWrapper(controllers[k])
        }) , {}))
    }
}