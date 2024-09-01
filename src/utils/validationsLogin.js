
const validationsLogin = (inputs) => {
    const errors = {}
    const regex = /^[^@]+@[^@]+$/;

    if(inputs.email.trim() === "") {
        errors.email = 'Campo requerido';
    }
    else if (!regex.test(inputs.email)) { 
        errors.email = 'Email inválido';
    }
    if(inputs.password.trim() === "") {
        errors.password = "Campo requerido";
    }
    return errors

}
export default validationsLogin;