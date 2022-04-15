import { Router } from "express";
import {admin} from "controllers";
import validator, { encript, isExist, isLength, isObjectId, isUnique } from "middleware/validator";
import { Admins } from "models";
import { isAdminAny, isMaster } from "middleware/isAuth";
const router = Router()

router.route('/admin')
    .get(
        isMaster,
        admin.get
    )
    .post(
        isMaster,
        validator('body', 'username password', isLength({ min: 6, max: 18, trim: true })),
        validator('body', 'username', isUnique(Admins , 'username')),
        validator('body' , 'password' , encript()),
        admin.post
    )
    .put(
        isMaster,
        validator('query', '_id', isObjectId()),
        validator('body', 'username', isLength({ min: 6, max: 18, trim: true })),
        admin.put
    )
    .delete(
        isMaster,
        validator('query', '_id', isObjectId()),
        admin.delete
    )

export default router