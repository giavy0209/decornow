import { Router } from "express";
import { user } from "controllers";
import validator, { encript, isEmail, isExist, isLength, isObjectId, isUnique } from "middleware/validator";
import { Users } from "models";
import { isUser } from "middleware/isAuth";
const router = Router()

router.route('/user')
    .get(
        isUser,
        user.get
    )
    .post(
        validator('body', 'password', isLength({ min: 6, max: 18, trim: true }), encript()),
        validator('body', 'email', isEmail(), isUnique(Users, 'email')),
        user.post
    )

export default router