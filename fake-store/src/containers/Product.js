import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

export default function Product() {
	const products = useSelector((state) => state.allProducts.products);
	return products.map(({ image, title, description }) => {
		return (
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={image} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{description}</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		);
	});
}
