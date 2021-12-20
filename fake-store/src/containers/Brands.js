import React, { useState } from "react";
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap";

export default function Brands() {
	const [brands, setBrands] = useState([
		"https://cdn.pixabay.com/photo/2014/04/03/10/50/adidas-311450_960_720.png",
		"https://cdn.pixabay.com/photo/2021/02/19/14/34/nike-6030418_960_720.png",
		"https://cdn.pixabay.com/photo/2019/12/22/12/24/geometrical-cougar-4712422_960_720.png",
		"https://cdn.pixabay.com/photo/2015/06/23/02/48/libra-818283_960_720.png",
		"https://cdn.pixabay.com/photo/2017/07/22/21/10/harley-davidson-2529974_960_720.jpg",
		"https://cdn.pixabay.com/photo/2016/03/17/07/02/starbucks-1262392_960_720.jpg",
		"https://cdn.pixabay.com/photo/2017/10/05/10/05/leaf-2818896_960_720.jpg",
		"https://cdn.pixabay.com/photo/2021/02/17/13/47/bitcoin-6024248_960_720.jpg",
	]);

	return (
		<ul
			style={{
				listStyleType: "none",
				marginTop: "5rem",
				marginLeft: "15rem",
				marginRight: "15rem",
				display: "flex",
				justifyContent: "space-around",
			}}
		>
			<Row lg={4}>
				{brands.map((element) => {
					return (
						<Col key={element}>
							<li
								
								style={{
									display: "flex",
									marginTop: "4rem",
									justifyContent: "space-around",
								}}
							>
								<img
									src={element}
									style={{ maxHeight: "10rem", maxWidth: "15rem" }}
								/>
							</li>
						</Col>
					);
				})}
			</Row>
		</ul>
	);
}
