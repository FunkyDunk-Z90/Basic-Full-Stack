import { useState } from 'react'
import { Link } from 'react-router-dom'

import Form from '../utils/Form'

const formDataInit: iPasswordReset = {
    newPassword: '',
    passwordConfirm: '',
}

function Login() {
    const [formData, setFormData] = useState<iPasswordReset>(formDataInit)

    const handleForgotPassword = (e: tFormEvent) => {
        e.preventDefault()

        console.log(e)

        console.log('loggin in')
        setFormData(formDataInit)
    }

    const handleChange = (e: tInputEvent) => {
        const { name, value } = e.target

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    console.log(formData)

    return (
        <div className="wrapper login">
            <Form
                buttonText="Reset Password"
                handleSubmit={() => handleForgotPassword}
                formComponents={[
                    {
                        inputObj: {
                            id: 'newPassword',
                            name: 'newPassword',
                            type: 'password',
                            handleChange,
                            placeholder: '**********',
                        },
                        labelObj: {
                            label: 'New Password',
                            htmlFor: 'newPassword',
                        },
                    },
                    {
                        inputObj: {
                            id: 'passwordConfirm',
                            name: 'passwordConfirm',
                            type: 'password',
                            handleChange,
                            placeholder: '***********',
                        },
                        labelObj: {
                            label: 'Confirm Password',
                            htmlFor: 'passwordConfirm',
                        },
                    },
                ]}
            />
            <Link to={'/login'}>Back to Login</Link>
        </div>
    )
}

export default Login
