import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, ListGroup } from "react-bootstrap";

function App() {
  return (
    <div>

      <Menu />
      <h1>Hello World</h1>

      <Button variant="primary">Primary</Button>

      <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  );
}

export default App;