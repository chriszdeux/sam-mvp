
export const authValues = {
  login: {
    values: {
      email: '',
      password: '',
    }, 
    required: {
      email: { required: true },
      password: { required: true },
    }  
  },
  register: {
    values: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    required: {
      email: { required: true },
      username: { required: true },
      password: { required: true },
      confirmPassword: { required: true },
      terms: { required: true },
    }
  }
} 

