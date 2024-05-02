import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import validator from 'validator'
import axios from 'axios'

export const useSignUp = () => {

    const [creds, setCreds] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    })

    const [errors, setErrors] = useState({
        nameError: '',
        emailError: '',
        phoneError: '',
        passwordError: '',
        confirmPasswordError: '',
        isMatched: '',
    })

    const [serverResponse, setServerResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setCreds({
            ...creds,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, phone, password, confirmPassword } = creds
        
        const validators = {
            name: validator.isLength(name, { min: 5, max: 30 }),
            email: validator.isEmail(email),
            phone: validator.isLength(phone, { min: 11, max: 15 }),
            password: validator.isLength(password, { min: 5, max: 30 }),
            confirmPassword: validator.isLength(confirmPassword, { min: 5, max: 30 }),
            isMached: validator.equals(password, confirmPassword)
        }

        if (name === '') {
            setErrors({
                ...errors,
                nameError: 'Please enter your name'
            })
            return;
        }

        if (!validators.name) {
            setErrors({
                ...errors,
                nameError: 'Name should be between 5 and 30'
            })
            return;
        }

        if (email === '') {
            setErrors({
                ...errors,
                emailError: 'Please enter your email'
            })
            return;
        }

        if (!validators.email) {
            setErrors({
                ...errors,
                emailError: 'Please enter a valid email'
            })
            return;
        }

        if (creds.phone === '') {
            setErrors({
                ...errors,
                phoneError: 'Please enter your phone number'
            })
            return;
        }

        if (!phone.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)) {
            setErrors({
                ...errors,
                phoneError: 'Enter a valid phone number'
            })
            return;
        }

        if (!validators.phone) {
            setErrors({
                ...errors,
                phoneError: 'Should be 11 to 15 digits'
            })
            return;
        }

        if (password === '') {
            setErrors({
                ...errors,
                passwordError: 'Please enter password'
            })
            return;
        }

        if (confirmPassword === '') {
            setErrors({
                ...errors,
                confirmPasswordError: 'Please confirm password'
            })
            return;
        }

        if (!validators.password) {
            setErrors({ 
                ...errors, 
                passwordError: 'Password should be between 5 and 30' 
            })
            return;
        }

        if (!validators.confirmPassword) {
            setErrors({ 
                ...errors, 
                confirmPasswordError: 'Password should be between 5 and 30' 
            })
            return;
        }

        if (!validators.isMached) {
            setErrors({ 
                ...errors, 
                isMatched: 'Password and Confirm password should be same' 
            })
            return;
        }

        else {
            setIsLoading(true)
            setErrors({
                ...errors,
                nameError: '',
                emailError: '',
                phoneError: '',
                passwordError: '',
                confirmPasswordError: '',
                isMatched: ''
            })

            try {

                const response = await axios.post('http://localhost:3000/signup', {
                    name: name,
                    email: email,
                    phone: phone,
                    password: password
                })

                setServerResponse({ status: 200, message: response.data.message })

                toast.success(response.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })

            } catch (error) {
                setServerResponse({ status: error.response.status, message: error.response.data.message })

                toast.error(error.response.data.message, {
                    position: "bottom-right",
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
        setIsLoading(false)

    }

    useEffect(() => {
        if (serverResponse) {
            if (serverResponse.status === 200) {
                setCreds({
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: ''
                })
            }
        }
    }, [serverResponse])

    return {
        creds,
        errors,
        serverResponse,
        isLoading,
        handleChange,
        handleSubmit
    }

}
