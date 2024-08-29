const validations = (inputs) => {
  const errors = {};

  const regexName = /^[^\d]+$/;

  if (inputs.name.trim() === "") {
    errors.name = "Campo requerido";
  } else {
    if (!regexName.test(inputs.name)) {
      errors.name = "Solo se permiten letras";
    }
    if (inputs.name.length > 25) {
      errors.name = "Campo requerido";
    }
  }

  if(inputs.phone.trim() === "") {
    errors.phone = "Campo requerido";
  }

  if(inputs.address.trim() === "") {
    errors.address = "Campo requerido";
  }
  if(inputs.city.trim() === "") {
    errors.city = "Campo requerido";
  }
  if(inputs.email.trim() === "") {
    errors.email = "Campo requerido";
  }
  if(inputs.password.trim() === "") {
    errors.password = "Campo requerido";
  }
  return errors

};
export default validations;
