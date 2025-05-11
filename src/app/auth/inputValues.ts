import { newDate } from "@/utils/dates.utils"

interface iValues {
  name: string,
  lastName: string,
  username: string,
  email: string,
  birthday: string,
  password: string,
  confirmPassword: string,
  terms: boolean,
  equal: boolean

}

export const initialValues:iValues = {
    name: '',
    lastName: '',
    username: '',
    email: '',
    birthday: newDate(),
    password: '',
    confirmPassword: '',
    terms: false, 
    equal: true,
}

export const requiredValues:any = {
  name: { required: true },
  lastName: { required: true },
  username: { required: true },
  email: { required: true },
  birthday: { required: true },
  password: { required: true },
  confirmPassword: { required: true },
  terms: { required: true }
}