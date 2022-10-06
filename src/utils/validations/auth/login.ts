import { object, string } from 'yup'

export const FormLoginSchema = object({
  username: string().required(),
  password: string().required().min(8),
})
