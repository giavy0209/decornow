import { NextFunction, Request, Response } from "express";
import {decode, verify} from 'jsonwebtoken'

export const isMaster = (req : Request, res : Response, next : NextFunction   ) => {
    
    if(req.headers?.authorization?.split(' ')?.[0] === 'Bearer') {
        try {
            const token = req.headers?.authorization?.split(' ')?.[1]
            const payload = verify(token, 'adminToken') as any
            console.log(payload.role);
            
            if(payload.role.includes(0)) {
                req.body.payload = payload
                return next()
            } 
            res.status(401).send({msg : 'unauth'})
        } catch (error) {
            res.status(401).send({msg : 'unauth'})
        }
    }else {
        res.status(401).send({msg : 'unauth'})

    }
}

export const isAdminDiscount = (req : Request, res : Response, next : NextFunction   ) => {
    
    if(req.headers?.authorization?.split(' ')?.[0] === 'Bearer') {
        try {
            const token = req.headers?.authorization?.split(' ')?.[1]
            const payload = verify(token, 'adminToken') as any
            if(payload.role.includes(0) || payload.role.includes(4)) {
                req.body.payload = payload
                return next()
            } 
            res.status(401).send({msg : 'unauth'})
        } catch (error) {
            res.status(401).send({msg : 'unauth'})
        }
    }else {
        res.status(401).send({msg : 'unauth'})

    }
}


export const isAdminAny = (req : Request, res : Response, next : NextFunction   ) => {
    
    if(req.headers?.authorization?.split(' ')?.[0] === 'Bearer') {
        try {
            const token = req.headers?.authorization?.split(' ')?.[1]
            const payload = verify(token, 'adminToken')
            req.body.payload = payload
            return next()
        } catch (error) {
            res.status(401).send({msg : 'unauth'})
        }
    }else {
        res.status(401).send({msg : 'unauth'})

    }
}

export const isUser = (req : Request, res : Response, next : NextFunction   ) => {
    
    if(req.headers?.authorization?.split(' ')?.[0] === 'Bearer') {
        try {
            const token = req.headers?.authorization?.split(' ')?.[1]
            const payload = verify(token, 'userToken')
            req.body.payload = payload
            return next()
        } catch (error) {
            res.status(401).send({msg : 'unauth'})
        }
    }else {
        res.status(401).send({msg : 'unauth'})

    }
}

