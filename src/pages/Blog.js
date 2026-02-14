import { Form, Button, Container, Card } from "react-bootstrap";
import { useState } from "react";

function Blog() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Заголовок", content: "Мой первый пост" }
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); 

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newPostObject = {
      id: Date.now(),
      title: title,
      content: content
    };

    setPosts([newPostObject, ...posts]);
    setTitle("");
    setContent("");
  };

  return (
    <Container className="mt-5">
      <div className="d-flex flex-column align-items-center">
        <Form className="w-50 mb-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Enter your title!</Form.Label>
            <Form.Control
              placeholder="Enter your title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Enter your post!</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter your post"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">Add post</Button>
        </Form>

        <div className="w-50">
          {posts.map((post) => (
            <Card key={post.id} className="mb-3">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                </div>
                <Button variant="danger" onClick={() => deletePost(post.id)}>X</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Blog;