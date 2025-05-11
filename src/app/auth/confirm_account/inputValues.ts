export const initialValues = {
  a: "",
  b: "",
  c: ""
}

export const requiredValues = {
  a: { 
    required: true,
    maxLength: 4,
    minLength: 4
   },
   b: {
    required: true,
    maxLength: 3,
    minLength: 3
   },
   c: {
    required: true,
    maxLength: 4,
    minLength: 4
   }
}