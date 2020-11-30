import formValidation from '../formValidation'

describe("Verify if a sent auth input (login and register)", () => {

  test("it should succeed (all inputs for register filled)", () => {
    const credentials = {password:"test", email:"test@test.com", name:"test name"};

    const response = formValidation(credentials)
    expect(response.success).toBeTruthy();
  });

  test("it should succeed (all inputs for login filled)", () => {
    const credentials = {password:"test", email:"test@test.com"};

    const response = formValidation(credentials)
    expect(response.success).toBeTruthy();
  });

  test("it should return false (email empty)", () => {
    const credentials = {password:"test", email: "", name:"test name"};

    const response = formValidation(credentials)
    expect(response.success).toBeFalsy();
  });

  test("it should return false (password empty)", () => {
    const credentials = {password:"", email: "test@test.com", name:"test name"};

    const response = formValidation(credentials)
    expect(response.success).toBeFalsy();
  });

  test("it should return false (name empty)", () => {
    const credentials = {password:"", email: "test@test.com", name:""};

    const response = formValidation(credentials)
    expect(response.success).toBeFalsy();
  });
});