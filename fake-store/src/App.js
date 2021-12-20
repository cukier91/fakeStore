import "./App.css";
import Nav from "./containers/Nav";
import ProductsList from "./containers/ProductsList";
import AboutUs from "./containers/AboutUs";
import Contact from "./containers/Contact";
import Brands from "./containers/Brands";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Product from "./containers/Product";
import NotFound from "./containers/NotFound";

function App() {
	return (
		<Routers>
			<Nav />
			<Routes>
				<Route path="/" element={<ProductsList />}/>
				<Route exact path="product" element={<Product />}>
					<Route exact path=":productId" element={<Product />} />
				</Route>
				<Route path="aboutus" element={<AboutUs />} />
				<Route path="contact" element={<Contact />} />
				<Route path="brands" element={<Brands />} />
				<Route path='*' element={<NotFound/>}/>
			</Routes>
		</Routers>
	);
}

export default App;
