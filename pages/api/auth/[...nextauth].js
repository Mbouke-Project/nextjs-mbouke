import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios'

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),

        Providers.Credentials({
            name: 'Rails', 
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'Email'}, 
                password: { label: "Password", type: 'password', placeholder: 'Password'}
            }, 
            async authorize(credentials) {
                // Add logic here to look up the user from the credentials supplied
                const user = await fetchUser(credentials)
                console.log('user', user)
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null or false then the credentials will be rejected
                    // throw new Error('Auth Failed. Sorry.') // Redirect to error page
                    // throw '/path/to/redirect'        // Redirect to a URL
                    return null
                    // You can also Reject this callback with an Error or with a URL:
                }
            
            }
        })
    ], 
    debug: process.env.NODE_ENV === 'development', 
    secret: process.env.AUTH_SECRET, 
    jwt: {
        secret: process.env.JWT_SECRET,
    }, 
}

const fetchUser = async credentials => {
    const result = await axios.post('http://127.0.0.1:4000/login', {user: credentials}, {withCredentials: true})
    return result.data.user

}


export default (req, res) => NextAuth(req, res, options)

