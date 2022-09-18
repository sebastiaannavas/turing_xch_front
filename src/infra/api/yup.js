// dependencies
import * as yup from "yup";

const ERROR_YUP = {
    MSG_NAME: "Sólo se permiten carácteres en este campo.",
    MSG_EMAIL: "Ingresa una dirección de correo válida.",
    MSG_PSW: "Incluye al menos una mayúscula, un número y un carácter especial.",
    MSG_OKPSW: "Las contraseñas deben coincidir."
}

const schema = {

    signin: yup.object().shape({

        name: yup.string().required().matches(/^\s?[a-zA-Z]+\s[a-zA-Z]+\s?$/), 
    
        email: yup.string().email().required(), 
    
        psw: yup.string().required().min(8).max(18)
        .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/),
    
        okPsw: yup.string().required().label('Confirmar contraseña').oneOf([yup.ref('psw'),null])
    }),

    login: yup.object().shape({

        email: yup.string().email().required(), 

        psw: yup.string().required().min(8).max(18)
        .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/),
    }),

    recover: yup.object().shape({

        email: yup.string().email().required(), 
    })

};

export { schema, ERROR_YUP };