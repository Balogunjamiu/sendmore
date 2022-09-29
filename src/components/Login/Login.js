import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../../hooks/useAuth';
import { LoginWrapper } from './StyledLogin';

function LoginForm() {

  const { logUserIn, } = useAuth()

  const handleSubmit = (e)=>{
    
    e.preventDefault()
    
    var email = e.target.elements.email.value
    var password = e.target.elements.password.value
    const values = {
      password,
      email
    }
    logUserIn(values)
  }

  
  return (
    <LoginWrapper>
    <Form onSubmit={handleSubmit}>
      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary"  type="submit">
        Submit
      </Button >
    </Form>
      </LoginWrapper>
  );
}

export default LoginForm;