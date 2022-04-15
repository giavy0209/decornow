import { Router } from "express";
import {auth} from "controllers";
import validator, { encript, isExist, isLength, isUnique } from "middleware/validator";
import { Admins } from "models";
const router = Router()

router.route('/auth-admin')
    .post(
        validator('body', 'username password', isLength({ min: 6, max: 18, trim: true })),
        validator('body', 'username', isExist(Admins,'username')),
        auth.adminAuth
    )

export default router