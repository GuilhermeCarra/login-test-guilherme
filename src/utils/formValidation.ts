type Credentials = {
  email: string,
  password: string,
  name?: string
}

const formValidation = ({email, password, name}: Credentials):any => {
  if (email !== "" && password !== "") {
    if(typeof name === "undefined") {
      return {success: true, error: null};
    } else {
      if (name !== "") return {success: true, error: null};
    }
  }
  return {success: false, error: "Please, fill all fields"}
}

export default formValidation;