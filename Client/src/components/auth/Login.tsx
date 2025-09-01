import Form from '../utils/Form'

function Login() {
    const handleLogin = () => {
        console.log('loggin in')
    }

    return (
        <>
            <Form
                buttonText="Login"
                handleSubmit={handleLogin}
                formComponents={}
            />
        </>
    )
}

export default Login
