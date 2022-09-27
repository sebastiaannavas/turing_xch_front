// dependencies
import * as yup from "yup";

const ERROR_YUP = {
    MSG_NAME: "Sólo se permiten carácteres alfabéticos en este campo.",
    MSG_EMAIL: "Ingresa una dirección de correo válida.",
    MSG_TLF: "El formato no es válido.",
    MSG_PSW: "Al menos una mayúscula, número y carácter especial.",
    MSG_OKPSW: "Las contraseñas deben coincidir.",
    MSG_MENSAJE: "La longitud máxima de caracteres es de 70.",
    MSG_DESTINATION: "Ingresa una dirección de correo válida.",
    MSG_AMOUNT: "El monto debe ser un número mayor a cero.",
    MSG_MONEY: "Seleccione una moneda válida.",
    MSG_NOTE: "La descripción no debe excederse de 50 caracteres.",
    MSG_PIN: "El código ingresado no tiene el formato correcto."
}

const schema = {

    signin: yup.object().shape({

        name: yup.string().required().matches(/^\s?[a-zA-Z]+\s[a-zA-Z]+\s?$/), 
    
        email: yup.string().email().required(), 

        tlf: yup.string().min(13).max(13).required(),
    
        psw: yup.string().required().min(8).max(18)
        .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/),
    
        okPsw: yup.string().required().label('Confirmar contraseña').oneOf([yup.ref('psw'),null])
    }),

    login: yup.object().shape({

        email: yup.string().email().required(), 

        psw: yup.string().required().min(8).max(18)
        .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/)
    }),

    recover: yup.object().shape({

        email: yup.string().email().required(), 
    }),

    changemail: yup.object().shape({

        email: yup.string().email().required(), 
    }),

    changepsw: yup.object().shape({
    
        psw: yup.string().required().min(8).max(18)
        .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/),
    
        okPsw: yup.string().required().label('Confirmar contraseña').oneOf([yup.ref('psw'),null])
    }),

    contact: yup.object().shape({

        email: yup.string().email().required(), 
        mensaje: yup.string().required().max(70),
    }),

    forgot: yup.object().shape({

        psw: yup.string().required().min(8).max(18)
        .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/),
    
        okPsw: yup.string().required().label('Confirmar contraseña').oneOf([yup.ref('psw'),null])
    }),

    deposits: yup.object().shape({

        destination: yup.string().email().required(),
        amount: yup.number().moreThan(0).required(),
        money: yup.string().required().min(3).max(4),
        note: yup.string().min(2).max(50)
    })
};

export { schema, ERROR_YUP };