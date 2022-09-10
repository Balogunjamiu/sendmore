import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ContactWrapper } from './ContactStyled';

function ContactUs() {
  return (
    <ContactWrapper>


       
     <Form>
    <Form.Group  className="mb-3" controlId="formBasicText">
        <Form.Label>Fullname</Form.Label>
        <Form.Control required type="text" placeholder="Fullname" />
      </Form.Group>
       
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    
      <Button variant="primary"  type="submit">
        Submit
      </Button >
    </Form> 
      </ContactWrapper>
  );
}

export default ContactUs;