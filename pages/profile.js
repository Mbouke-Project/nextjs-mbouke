import { signIn, signOut, useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Navigation from '../components/navigation.js'


function Profile({ success }) {
  const router = useRouter()
  const [email, setEmail] = useState('')

  useEffect(() => {

    if (!localStorage.token) {
      router.push('/')
    }
      axios.get("http://127.0.0.1:4000/profile", {headers: {'Authorization': `Basic ${localStorage.token}`}})
      .then(response => {
        console.log(response)
        setEmail(response.data.user.email)
      })
      .catch( error => {
        console.log(error)
      })
  })

  console.log(success)
    const [ session, loading ] = useSession()


    return <>
    <Navigation/>
 Welcome {email}
    </>
}

export default Profile