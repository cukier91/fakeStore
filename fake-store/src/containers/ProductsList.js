import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts, fetchProducts } from "../redux/actions/productActions";
import Product from "./Product";

export default function ProductsList() {
	const products = useSelector((state) => state.allProducts);
	const dispatch = useDispatch();

	// const fetchProduct = async () => {
	// 	const response = await axios
	// 		.get("https://fakestoreapi.com/products")
	// 		.catch((err) => {
	// 			console.log("Error ...", err);
	// 		});
	// 	dispatch(setProducts(response.data));
	// };

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return <Product />;
}
