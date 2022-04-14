import { Router } from "express";
import { body } from "express-validator";
import authController from "controllers/auth";
const router = Router()

router.route('/admin-auth')
    .post(
        body(['username password']).isLength({min : 6 , max : 12}),
        authController
    )

export default router