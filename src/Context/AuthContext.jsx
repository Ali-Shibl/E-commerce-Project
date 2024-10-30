import { createContext,  useState } from 'react'

export const Auth=createContext()

function AuthProvider({children}) {

const [userIsLogiedin, setuserIsLogiedin] = useState(!!localStorage.getItem('Token'))

    return <Auth.Provider value={{userIsLogiedin, setuserIsLogiedin}}>

            {children}

    </Auth.Provider>
    
}
export default AuthProvider;