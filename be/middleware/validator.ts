import { NextFunction, Request, Response } from "express";
import { Model,isValidObjectId } from 'mongoose'
import { hashSync } from 'bcrypt'
interface ExtendsRequest extends Request { [k: string]: any }

const validator = function (requestField: string, key: string, ...validateFunction: Function[]) {
  return async function (req: ExtendsRequest, res: Response, next: NextFunction) {
    const fields = requestField.split(' ')
    const keys = key.split(' ')
    for (let index = 0; index < fields.length; index++) {
      const field = fields[index];
      for (let jndex = 0; jndex < keys.length; jndex++) {
        const _key = keys[jndex];
        const data = req[field][_key]
        for (let kndex = 0; kndex < validateFunction.length; kndex++) {
          const fn = validateFunction[kndex];
          const { result, msg, mapedData } = await fn(data)
          
          if(mapedData)req[field][_key] = mapedData
          
          if (!result) {
            return res.status(400).send({
              msg,
              field,
              key: _key
            })
          }
        }
      }
    }
    next()
  }
}

interface MinMaxOption {
  min?: number,
  max?: number,
  trim?: boolean
}


const notValid = function (msg: any) {
  return { result: false, msg }
}
const valid = function (msg: any) {
  return { result: true, msg }
}

export const isLength = (options: MinMaxOption) => {
  const notValidResult = notValid('wrong length')
  const validResult = valid('')
  return function (data: string) {
    let { min = 0, max = 99999, trim = false } = options
    if (typeof data !== 'string') return notValidResult
    if (trim) data = data.trim()

    if (data.length < min || data.length > max) return notValidResult
    return validResult
  }
}

export const isInRange = (options: MinMaxOption) => {
  const notValidResult = notValid('wrong length')
  const validResult = valid('')
  return function (data: any) {
    let { min = 0, max = Infinity} = options
    if (isNaN(data)) return notValidResult
    
    if (Number(data) < min || Number(data) > max) return notValidResult
    return {...validResult , mapedData : Number(data)}
  }
}

interface isUnique {
  (model: Model<any>, field: string): (data: string) => any
}

export const isUnique: isUnique = (model, field) => {
  const notValidResult = notValid('existed')
  const validResult = valid('')
  return async function (data: string) {
    const exist = await model.exists({ [field]: data })
    if (exist) return notValidResult
    return validResult
  }
}

export const isExist: isUnique = (model, field) => {
  const notValidResult = notValid('not existed')
  const validResult = valid('')
  return async function (data: string) {
    const findData = await model.findOne({ [field]: data })
    if (!findData) return notValidResult
    return {...validResult, mapedData : findData}
  }
}

export const encript = () => {
  const validResult = valid('')
  return async (data: string) => {
    return { ...validResult, mapedData: hashSync(data, 5) }
  }
}

export const isObjectId = () => {
  const notValidResult = notValid('not valid query')
  const validResult = valid('')
  return async (data: string) => {
    if(!isValidObjectId(data)) return notValidResult
    return validResult
  }
}



export default validator