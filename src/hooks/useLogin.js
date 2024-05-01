import axios from 'axios'

function useLogin() {

    const loginRequest = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email,
                password
            })
            return response
        } catch (error) {
            return error
        }
    }

    return {
        loginRequest
    }
}

export default useLogin;