import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectedProduct } from "../redux/actions/productActions";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function ProductDetail() {
	const product = useSelector((state) => state.product);
	const { productId } = useParams();
	const dispatch = useDispatch();
    
	
	const fetchProductDetail = async () => {
		const rensponse = await axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.catch((err) => {
				console.log("Error", err);
			});
		dispatch(selectedProduct(rensponse));
		console.log(rensponse);
	};

	useEffect(() => {
		if (productId && productId !== "") fetchProductDetail();
	}, [productId]);
	return (
		<div>
			{Object.keys(product).length === 0 ? (
				<div> loading </div>
			) : (
				<Card style={{height:'auto', maxWidth:'35rem', display:'block', marginLeft:'auto', marginRight:'auto', marginTop:'5rem'}}>
					<Card.Img variant="top" src={product.data.image} />
					<Card.Body>
						<Card.Title>{product.data.title}</Card.Title>
						<Card.Text>{product.data.description}</Card.Text>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem>Category: {product.data.category}</ListGroupItem>
						<ListGroupItem>Price: {product.data.price}</ListGroupItem>
						<ListGroupItem>Rate: {product.data.rating.rate}</ListGroupItem>
					</ListGroup>
				</Card>
			)}
		</div>
	);
}
