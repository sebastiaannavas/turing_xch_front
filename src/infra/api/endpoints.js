const GET = {
    // EMAIL_VER: "http://localhost:8888/getEmailVerification?emailToken="
    JWT_VER: "https://resplendent-profiterole-d15e2e.netlify.app/getCheckJwt",
    EMAIL_REVER: "https://resplendent-profiterole-d15e2e.netlify.app/getSendVerificationEmail?email=",
    EMAIL_VER: "https://resplendent-profiterole-d15e2e.netlify.app/getEmailVerification?emailToken=",
    RECOVER_PSW: "https://resplendent-profiterole-d15e2e.netlify.app/getChangePassEmail?email=",
    USER_PROFILE: "https://resplendent-profiterole-d15e2e.netlify.app/getUserProfile",
    BALANCE: "https://resplendent-profiterole-d15e2e.netlify.app/getBalance",
    MOVEMENTS: "https://resplendent-profiterole-d15e2e.netlify.app/getMovements"
}

const POST = {
    // NEW_USER: "http://localhost:8888/postRegister",
    // LOG_USER: "http://localhost:8888/login"
    NEW_USER: "https://resplendent-profiterole-d15e2e.netlify.app/postRegister",
    LOG_USER: "https://resplendent-profiterole-d15e2e.netlify.app/login",
    NEW_PSW: "https://resplendent-profiterole-d15e2e.netlify.app/postChangePass",
    DEPOSIT: "https://resplendent-profiterole-d15e2e.netlify.app/postPay"
}

export { GET, POST };