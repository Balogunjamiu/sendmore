import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { SignupWrapper } from './StyledLogin';
import {useAuth} from '../../hooks/useAuth';

function SignupForm() {

  const {registerUsers} = useAuth()

  const handleSubmit=(e)=>{
    e.preventDefault()
    // const formData = new FormData(e.target),
    //       formDataObj = Object.fromEntries(formData.entries())
          var fullname = e.target.elements.fname.value
        var password = e.target.elements.password.value
        var email = e.target.elements.email.value
    // console.log(formDataObj)
    const values = {
      fullname,
      password,
      email
    }
    console.log(values)
      registerUsers(values)
  }
  return (
    <SignupWrapper>
    <Form onSubmit={handleSubmit}>
    <Form.Group  className="mb-3" controlId="formBasicText">
        <Form.Label>Fullname</Form.Label>
        <Form.Control required type="text" name="fname" placeholder="Fullname" />
      </Form.Group>
      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label> Confirm Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary"  type="submit">
        Submit
      </Button >
    </Form>
      </SignupWrapper>
  );
}

export default SignupForm;