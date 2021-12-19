import "./App.css";
import Nav from "./containers/Nav";
import ProductsList from "./containers/ProductsList";
import AboutUs from "./containers/AboutUs";
import Contact from "./containers/Contact";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routers>
			<Nav />
			<Routes>
				<Route path="/" exact element={<ProductsList/>}>
        </Route>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="contact" element={<Contact/>}/>
			</Routes>
		</Routers>
	);
}

export default App;
