import React, { useState } from 'react'

const RegisterViewModel = () => {
    const [values, setValues] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const onChange = (prop: string, value: any) => {
        setValues({ ...values, [prop]: value})
    }

    const register = () => {
        console.log(values)
    }

    return {
        ...values,
        onChange,
        register
    }
}

export default RegisterViewModel;