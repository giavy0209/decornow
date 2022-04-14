import {compareSync} from 'bcrypt'
import { Request, Response } from 'express'

import controllers from '.'

const authController = controllers(null , {
    authAdmin : (req : Request,res : Response) => {
        res.send('123')
    }
})

export default authController