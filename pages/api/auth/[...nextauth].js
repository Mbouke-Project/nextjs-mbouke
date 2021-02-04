import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),

    ], 
    debug: process.env.NODE_ENV === 'development', 
    secret: process.env.AUTH_SECRET, 
    jwt: {
        secret: process.env.JWT_SECRET,
    }, 
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: null // If set, new users will be directed here on first sign in
      }
}


export default (req, res) => NextAuth(req, res, options)

