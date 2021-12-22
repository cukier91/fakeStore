import React, { useState } from "react";
import {
	Card,
	Button,
	Row,
	Col,
	ListGroupItem,
	ListGroup,
} from "react-bootstrap";

export default function Contact() {
	const [workers, setWorkers] = useState([
		{
			name: "Wojtek Kowalski",
			image:
				"https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_960_720.jpg",
			phone: "111-222-333",
			title: "Customer service",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos autem ducimus saepe odit sequi praesentium cupiditate, voluptate similique sint delectus qui suscipit, quaerat deserunt dicta illum.",
			email: "wkowalski@store.eu",
		},
		{
			name: "Adam Nowak",
			image:
				"https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",
			phone: "111-222-333",
			title: "Customer service",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos autem ducimus saepe odit sequi praesentium cupiditate, voluptate similique sint delectus qui suscipit, quaerat deserunt dicta illum.",
			email: "anowak@store.eu",
		},
		{
			name: "Piotr Koza",
			image:
				"https://cdn.pixabay.com/photo/2016/03/24/09/10/men-1276384_960_720.jpg",
			phone: "111-222-333",
			title: "Owner",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos autem ducimus saepe odit sequi praesentium cupiditate, voluptate similique sint delectus qui suscipit, quaerat deserunt dicta illum.",
			email: "pkoza@store.eu",
		},
		{
			name: "Aneta Morris",
			image:
				"https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_960_720.jpg",
			phone: "111-222-333",
			title: "Co-owner",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos autem ducimus saepe odit sequi praesentium cupiditate, voluptate similique sint delectus qui suscipit, quaerat deserunt dicta illum.",
			email: "amorris@store.eu",
		},
	]);
	return (
		

			<Row
				lg={4}
				style={{ marginTop: "2%", marginLeft: "auto", marginRight: "auto" }}
			>
				{workers.map(({ image, title, description, name, phone, email }) => {
					return (
						<Col key={image}>
							<div
								style={{
									width: "18rem",
									height: "auto",
									alignContent: "space-around",
									marginBottom: "1rem",
								}}
							>
								<Card.Img
									variant="top"
									src={image}
									style={{ width: "18rem", height:'23rem' }}
								/>

								<Card.Body>
									<Card.Title>{title}</Card.Title>
									<Card.Text style={{ width: "16rem", height: "10rem" }}>
										{description}
									</Card.Text>
									<ListGroup className="list-group-flush">
										<ListGroupItem>
											Name: <b>{name}</b>
										</ListGroupItem>
										<ListGroupItem>
											Phone: <b>{phone}</b>
										</ListGroupItem>
										<ListGroupItem>
											e-mail: <b>{email}</b>
										</ListGroupItem>
									</ListGroup>
								</Card.Body>
							</div>
						</Col>
					);
				})}
			</Row>
	
	);
}
