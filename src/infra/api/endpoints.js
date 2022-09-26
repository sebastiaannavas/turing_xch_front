const GET = {
    // EMAIL_VER: "http://localhost:8888/getEmailVerification?emailToken="
    EMAIL_VER: "https://resplendent-profiterole-d15e2e.netlify.app/getEmailVerification?emailToken="
}

const POST = {
    // NEW_USER: "http://localhost:8888/postRegister",
    // LOG_USER: "http://localhost:8888/login"
    NEW_USER: "https://resplendent-profiterole-d15e2e.netlify.app/postRegister",
    LOG_USER: "https://resplendent-profiterole-d15e2e.netlify.app/login",
    DEPOSIT: "https://resplendent-profiterole-d15e2e.netlify.app/postPay"
}

export { GET, POST };