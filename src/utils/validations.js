const validations = (inputs) => {
  const errors = {};

  const regexName = /^[^\d]+$/;

  if (inputs.name.trim() === "") {
    errors.name = "El nombre es requerido";
  } else {
    if (!regexName.test(inputs.name)) {
      errors.name = "El nombre no puede contener números";
    }
    if (inputs.name.length > 25) {
      errors.name = "El nombre es muy largo";
    }
  }

  if(inputs.phone.trim() === "") {
    errors.phone = "El telefono es requerido";
  }

  if(inputs.address.trim() === "") {
    errors.address = "La direccion es requerida";
  }
  if(inputs.city.trim() === "") {
    errors.city = "La ciudad es requerida";
  }
  if(inputs.email.trim() === "") {
    errors.email = "El email es requerido";
  }
  return errors

};
export default validations;
