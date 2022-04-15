import { Router } from "express";
import {auth} from "controllers";
import validator, { encript, isEmail, isExist, isLength, isUnique } from "middleware/validator";
import { Admins, Users } from "models";
const router = Router()

router.route('/auth-admin')
    .post(
        validator('body', 'username password', isLength({ min: 6, max: 18, trim: true })),
        validator('body', 'username', isExist(Admins,'username')),
        auth.adminAuth
    )

router.route('/auth')
        .post(
            validator('body' , 'email' , isEmail(), isExist(Users , 'email')),
            auth.userAuth
        )

export default router