import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignupPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    function handleUsernameChange (event) {
        setUsername(event.target.value)
    }
    function handlePasswordChange (event) {
        setPassword(event.target.value)
    }
    function handleSubmit (event) {
        event.preventDefault()
        const localUsers = localStorage.getItem('users')
        const users = JSON.parse(localUsers)
        const localCredentials = localStorage.getItem('credentials')
        const credentials = JSON.parse(localCredentials)
        const usernameTaken = username in credentials
        if (usernameTaken) {
            return
        }
        const newUser = { username, password }
        users.push(newUser)
        const newUsersString = JSON.stringify(users)
        localStorage.setItem('users', newUsersString)

        credentials[username] = password
        const newCredentialsString = JSON.stringify(credentials)
        localStorage.setItem('credentials', newCredentialsString)
    }
    return (
        <>
            <h1>Signup</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </Form.Group>
                <Button type='submit'>Submit</Button>
                <div>
                    <Link to='/login'>Login</Link>
                </div>
            </Form>
        </>
    )
}

export default SignupPage;
