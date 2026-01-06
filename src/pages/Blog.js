import { Form, Button, Container } from "react-bootstrap";


function Blog(){
    return (
        <Container className="d-flex justify-content-center mt-5">
            <Form className="w-50 mb-3 ">
                <Form.Group className="mb-3">
                    <Form.Label>Enter your post!</Form.Label>
                        <Form.Control
                        placeholder="Enter your post"
                        type="text"
                        name="post">
                        </Form.Control>
                </Form.Group>
                    <Button class="form" type="submit">Add post</Button>
            </Form>
        </Container>
        
    )
}

export default Blog;