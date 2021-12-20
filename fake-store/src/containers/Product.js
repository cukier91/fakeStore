import React from "react";
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

export default function Product() {
	const products = useSelector((state) => state.allProducts.products);
	return (
		<Row lg={4} style={{marginTop:'2rem', marginLeft:'2rem', marginRight:'2rem'}}>
			{products.map(({ image, title, description, id }) => {
				return (
					<Col key={id} >
						<div  style={{ width: "18rem", height:'auto', alignContent:'space-around', marginBottom:'1rem'}}>
							<Card.Img variant="top" src={image} style={{width:'12rem', height:'12rem'}}/>
							<Card.Body>
								<Card.Title>{title}</Card.Title>
								<Card.Text style={{width:'16rem', height:'8rem', overflow:'auto'}}>{description}</Card.Text>
							</Card.Body>
                            <Button variant="primary">Go somewhere</Button>
						</div>
					</Col>
				);
			})}
		</Row>
	);
}
