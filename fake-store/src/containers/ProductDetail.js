import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchProduct } from "../redux/actions/productActions";
import {
	Card,
	ListGroup,
	ListGroupItem,
	Button,
	Spinner,
} from "react-bootstrap";

export default function ProductDetail() {
	const product = useSelector((state) => state.product);
	const { productId } = useParams();
	const dispatch = useDispatch();

	// const fetchProductDetail = async () => {
	// 	const rensponse = await axios
	// 		.get(`https://fakestoreapi.com/products/${productId}`)
	// 		.catch((err) => {
	// 			console.log("Error", err);
	// 		});
	// 	dispatch(selectedProduct(rensponse));

	// };

	useEffect(() => {
		if (productId && productId !== "") dispatch(fetchProduct(productId));
	}, [productId]);
	return (
		<div>
			{Object.keys(product).length === 0 ? (
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
			) : (
			
					<Card
						style={{
							height: "auto",
							maxWidth: "60em",
							display: "block",
							marginLeft: "auto",
							marginRight:'auto',
							marginTop: "2%",
							marginBottom:'2%'
						}}
					>
						<Card.Img variant="top" src={product.image} />
					
						<Card.Body>
							<Card.Title>{product.title}</Card.Title>
							<Card.Text>{product.description}</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroupItem>Category: {product.category}</ListGroupItem>
							<ListGroupItem>
								Rate: <b>{product.rating.rate}</b>
							</ListGroupItem>
							<Button>
								Price: <b>{product.price} $</b>
							</Button>
						</ListGroup>
					</Card>
			
			)}
		</div>
	);
}
