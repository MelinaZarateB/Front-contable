const regexName = /^[^\d]+$/;
const regexPassword =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_+\-]).{8,}$/;
const regexEmail = /^[^@\s]+@[^@\s]+\.[cC][oO][mM]$/;

const validations = (inputs) => {
  const errors = {};

  if (inputs.username.trim() === "") {
    errors.username = "Campo requerido";
  } else {
    if (!regexName.test(inputs.username)) {
      errors.name = "Solo se permiten letras";
    }
  }

  if (inputs.phone.trim() === "") {
    errors.phone = "Campo requerido";
  }

  if (inputs.address.trim() === "") {
    errors.address = "Campo requerido";
  }
  if (inputs.city.trim() === "") {
    errors.city = "Campo requerido";
  }
  if (!regexEmail.test(inputs.email) || inputs.email.trim() === "") {
    errors.email = "Campo requerido";
  }
  if (!regexPassword.test(inputs.password)) {
    errors.password = "Campo requerido";
  }
  return errors;
};
const validationsLogin = (inputs) => {
  const errors = {};

  if (inputs.email.trim() === "") {
    errors.email = "Campo requerido";
  } else if (!regexEmail.test(inputs.email)) {
    errors.email = "Email inválido";
  }
  if (inputs.password.trim() === "") {
    errors.password = "Campo requerido";
  }
  return errors;
};

const validationRestorePassword = (input) => {
  const errors = {};
  if (!regexEmail.test(input.email) || input.email.trim() === "") {
    errors.email = "Campo requerido";
  }
  return errors;
};

const changePassword = (input) => {
  const errors = {};

  if(!regexPassword.test(input.password) || input.password.trim() === "") {
    errors.password = 'Campo requerido';
  };
  return errors;
}
export { validations, validationsLogin, validationRestorePassword, changePassword };
