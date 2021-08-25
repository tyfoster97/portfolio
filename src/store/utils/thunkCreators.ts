import axios from 'axios'

export const fetchUser = async () => {
    try {
        const { data } = await axios.get('/.auth/me')
        const { clientPrincipal } = data
        return clientPrincipal 
    } catch (err) {
        console.error(err)
    }
}