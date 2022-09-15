// dependencies
import * as yup from "yup";

const ERROR_YUP = {
    MSG_NAME: "Sólo se permiten carácteres en este campo.",
    // MSG_ALIAS: "Tu alias debe ser de al menos 5 carácteres.",
    MSG_EMAIL: "Ingresa una dirección de correo válida.",
    MSG_PSW: "Incluye al menos una mayúscula, un número y un carácter especial.",
    MSG_OKPSW: "Las contraseñas deben coincidir."
}

const schema = yup.object().shape({

    fname: yup.string().required().matches(/^[aA-zZ\s]+$/), 
    //Restringir espacios intermedios. Pasarlo en Capitalcase
    // Que el primer caracter no sea numero. Acepte letras y numeros. Restringir espacios intermedios TRIM
    email: yup.string().email().required(), 
    // Pasarlo a lowercase
    psw: yup.string().required().min(8).max(18)
    .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/),

    okPsw: yup.string().required().label('Confirmar contraseña').oneOf([yup.ref('psw'),null])
});

export { ERROR_YUP, schema };