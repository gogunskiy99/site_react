import { Form, Button, Container } from "react-bootstrap";


function Contacts(){
    return (
        <Container className="d-flex justify-content-center mt-5">
            <Form className="w-50 mb-3 ">
                <Form.Group className="mb-3">
                    <Form.Label>Enter your name</Form.Label>
                        <Form.Control
                        placeholder="Enter your name"
                        type="text"
                        name="name" >
                        </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter your E-mail</Form.Label>
                        <Form.Control
                        placeholder="Enter your E-mail"
                        type="text"
                        name="E-mail">
                        </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter your message</Form.Label>
                        <Form.Control as="textarea"
                        placeholder="Enter your message"
                        type="text"
                        name="message">
                        </Form.Control>
                </Form.Group>
                    <Button class="form" type="submit">Send message</Button>
            </Form>
        </Container>
        
    )
}

export default Contacts;