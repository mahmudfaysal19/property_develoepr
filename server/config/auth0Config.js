import { auth } from 'express-oauth2-jwt-bearer'

// Read Auth0 config from environment variables so deployed servers can set their values
const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE || "http://localhost:8000",
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || "https://dev-03ifqltxbr6nn0hn.us.auth0.com",
    tokenSigningAlg: "RS256",
})

export default jwtCheck