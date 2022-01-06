import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

export default function Product() {
	const products = useSelector((state) => state.allProducts.products);

	if (products.length === 0) {
		return (
			<div style={{
				
				marginTop:'20%',
				marginLeft:'auto',
				marginRight:'auto',
				display:'flex',
				alignItems:'center',
				justifyContent:'center'
				
			}}>
				<Spinner
					animation="grow"
					variant="dark"
						
				/>
			</div>
		);
	} else {
		return (
			<Row
				lg={4}
				style={{ marginTop: "5%", marginLeft: "10%", marginRight: "10%" }}
			>
				{products.map(({ image, title, description, id, price }) => {
					return (
						<Col key={id}>
							<div
								style={{
									width: "18rem",
									height: "auto",
									alignContent: "space-around",
									marginBottom: "1rem",
								}}
							>
								<Link to={`/product/${id}`}>
									<Card.Img
										variant="top"
										src={image}
										style={{ width: "12rem", height: "12rem" }}
									/>
								</Link>
								<Card.Body>
									<Card.Title>{title}</Card.Title>
									<Card.Text
										style={{ width: "16rem", height: "8rem", overflow: "auto" }}
									>
										{description}
									</Card.Text>
								</Card.Body>

								<Button variant="primary">Buy {price} $</Button>
							</div>
						</Col>
					);
				})}
			</Row>
		);
	}
}
