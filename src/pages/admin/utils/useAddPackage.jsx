import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'


export const useAddPackage = () => {

    /* Get Packages */
    const [packages, setPackages] = useState([])

    const getPackages = async () => {
        try {
            const response = await axios.get('http://localhost:3000/admin/get/packages')

            setPackages(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPackages()
    }, [])


    /* Add Package */
    const [isLivePreview, setIsLivePreview] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        duration: '',
        detail: '',
        benefits: [
            {
                id: 1,
                benefit: '',
            },
        ],
    });

    const [errors, setErrors] = useState({
        name: '',
        price: '',
        duration: '',
        detail: '',
    });

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        if (name === 'benefit') {
            setFormData((prev) => ({
                ...prev,
                benefits: prev.benefits.map((benefit) => {
                    if (benefit.id === id) {
                        return {
                            ...benefit,
                            benefit: value,
                        };
                    }
                    return benefit;
                }),
            }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const generateBenefit = () => {
        setFormData((prev) => ({
            ...prev,
            benefits: [
                ...prev.benefits,
                {
                    id: prev.benefits.length + 1,
                    benefit: '',
                },
            ],
        }));
    };

    const removeBenefit = (index) => {
        setFormData((prev) => {
            const updatedBenefits = prev.benefits.filter((_, i) => i !== index).map((benefit, i) => ({
                ...benefit,
                id: i + 1, // Reassign IDs to be sequential
            }));
            return {
                ...prev,
                benefits: updatedBenefits,
            };
        });
    };
    
    const validateToEnableButton = () => {
        return formData.name !== '' && formData.price !== '' && formData.duration !== '';
    }

    const handleBlur = () => {
        let shouldPreview = false
        for (let key in formData) {
            if (typeof formData[key] === 'string' && formData[key].length > 3) {
                shouldPreview = true
                break
            } else if (Array.isArray(formData[key])) {
                for (let item of formData[key]) {
                    if (item.benefit && item.benefit.length > 3) {
                        shouldPreview = true
                        break
                    }
                }
            }
        }
        setIsLivePreview(shouldPreview)
    }

    useEffect(() => {
        if (formData.detail.length > 2000) {
            setErrors((prev) => ({
                ...prev,
                detail: 'Description must be less than 2000 characters',
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                detail: '',
            }));
        }
    }, [formData.detail])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const { name, price, duration, detail, benefits } = formData

        if (name === '') {
            setErrors((prev) => ({
                ...prev,
                name: 'Package name is required',
            }));
            return
        }

        if (price === '') {
            setErrors((prev) => ({
                ...prev,
                price: 'Package price is required',
            }));
            return
        }

        if (duration === '' || duration < 1) {
            setErrors((prev) => ({
                ...prev,
                duration: 'Package duration is required',
            }));
            return
        }

        setIsLoading(true)

        try {
            const result = await axios.post('http://localhost:3000/admin/add/package', {
                name: name,
                price: price,
                duration: duration,
                detail: detail,
                benefits: benefits.map((benefit) => benefit.benefit),
            })

            
                setPackages(result.data.data)

                setFormData({
                    name: '',
                    price: '',
                    duration: '',
                    detail: '',
                    benefits: [
                        {
                            id: 1,
                            benefit: '',
                        },
                    ],
                })
                setErrors({
                    name: '',
                    price: '',
                    duration: '',
                    detail: '',
                })

                toast.success(result.data.message, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                })

        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            })
        }

        setIsLoading(false)
    }

    return { 
        packages,
        formData, 
        errors, 
        isLoading,
        isLivePreview,
        handleChange, 
        generateBenefit, 
        removeBenefit, 
        handleBlur, 
        handleSubmit, 
        validateToEnableButton,
    }

}