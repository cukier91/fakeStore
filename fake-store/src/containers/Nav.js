import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";

export default function Nav() {
	return (
		<>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=Sofia"
			/>
			<div
				style={{ display: "flex", fontFamily: "Sofia", borderBottom: "groove" }}
			>
				<img
					src="https://media.istockphoto.com/vectors/cart-trolley-vector-id1289126373"
					style={{ height: "55px", width: "55px" }}
					alt="Torbka"
				/>
				<h3 style={{ marginTop: "10px" }}>Fake shop</h3>
			</div>
			<Navbar
				expand="lg"
				variant="light"
				bg="light"
			>
				<Container >
					<Navbar.Brand href="#"><u>About us</u></Navbar.Brand>
					<Navbar.Brand href="#"><u>Contact</u></Navbar.Brand>
					<Navbar.Brand href="#"><u>Meet our brands</u></Navbar.Brand>
					<Navbar.Brand href="#"><u>Our team</u></Navbar.Brand>
					
				</Container>
			</Navbar>
		</>
	);
}
