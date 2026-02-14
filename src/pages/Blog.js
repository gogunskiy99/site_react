import { Form, Button, Container, Card } from "react-bootstrap";
import { useState } from "react";

function Blog() {
  // 1. Состояние для массива постов
  const [posts, setPosts] = useState([
    { id: 1, title: "Заголовок", content: "Мой первый пост" }
  ]);

  // 2. Состояние для полей ввода
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // Назвали контент контентом :)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    // Создаем объект нового поста
    const newPostObject = {
      id: Date.now(),
      title: title,
      content: content
    };

    // Обновляем список (новый пост в начало + распаковка старых)
    setPosts([newPostObject, ...posts]);

    // Очищаем поля
    setTitle("");
    setContent("");
  };

  return (
    <Container className="mt-5">
      <div className="d-flex flex-column align-items-center">
        {/* Форма */}
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
              as="textarea" // Чтобы было удобнее писать текст
              placeholder="Enter your post"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">Add post</Button>
        </Form>

        {/* Список постов */}
        <div className="w-50">
          {posts.map((post) => (
            <Card key={post.id} className="mb-3">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Blog;