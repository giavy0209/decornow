import { Router } from "express";
import {discount} from "controllers";
import validator, { encript, isExist, isInRange, isLength, isUnique } from "middleware/validator";
import { Admins } from "models";
import { isAdminDiscount } from "middleware/isAuth";
const router = Router()

router.route('/discount')
    .get(
        isAdminDiscount,
        discount.get
    )
    .post(
        isAdminDiscount,
        validator('body', 'min max total value' , isInRange({min : 0})),
        validator('body', 'code' , isLength({min : 1})),
        discount.post
    )
    .put(
        isAdminDiscount,
        validator('body', 'min max total value' , isInRange({min : 0})),
        validator('body', 'code' , isLength({min : 1})),
        discount.put
    )
    .delete(
        isAdminDiscount,
        discount.delete
    )

export default router