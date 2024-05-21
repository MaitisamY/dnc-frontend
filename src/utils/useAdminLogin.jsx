import { useState, useEffect } from 'react'
import { useAdmin } from '../hooks/useAdminProvider'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify' 
import axios from 'axios'
import validator from 'validator'


export const useAdminLogin = () => {

    const navigate = useNavigate()

    const { updateAdmin, updateToken } = useAdmin()

    const [creds, setCreds] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const [isLoading, setIsLoading] = useState(false)
    const [isShown, setIsShown] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setCreds({
            ...creds,
            [name]: value
        })
    }

    const togglePassword = () => {
        setIsShown(!isShown)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = creds;

        if (email === '') {
            setErrors({
                ...errors,
                email: 'Please enter your email'
            })
            return;
        }
        if (email.length < 5) {
            setErrors({
                ...errors,
                email: 'Min 5 characters required'
            })
            return;
        }
        if (!validator.isEmail(email)) {
            setErrors({
                ...errors,
                email: 'Please enter a valid email'
            })
            return;
        }

        if (password === '') {
            setErrors({
                ...errors,
                password: 'Please enter your password'
            })
            return;
        }

        if (password.length < 5) {
            setErrors({
                ...errors,
                password: 'Min 5 characters required'
            })
            return;
        }

        setIsLoading(true)

        try {
            const response = await axios.post('http://localhost:3000/admin/login', {
                email,
                password
            })

            updateToken(response.data.token)

            updateAdmin({
                id: response.data.data.id,
                name: response.data.data.name,
                email: response.data.data.email
            });

            setTimeout(() => {
                navigate('/admin/dashboard');
            }, 3000);
        } catch (error) {
            toast.error(error.response.data.error, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }

    useEffect(() => {
        if (validator.isEmail(creds.email)) {
            setErrors({
                ...errors,
                email: ''
            })
        }
        if (creds.password.length >= 5) {
            setErrors({
                ...errors,
                password: ''
            })
        }
    }, [creds.email, creds.password])

    return {
        creds,
        errors,
        isLoading,
        isShown,
        handleChange,
        togglePassword,
        handleSubmit
    }
}

