import "./App.css";
import {Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Card style={{ width: "18rem"}}>
				<Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/09/15/08/01/leather-case-2751381_960_720.png" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default App;
