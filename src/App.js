import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";

import { GlobalStyles } from "./GlobalStyles";

function App() {
	return (
		<div>
			<GlobalStyles />
			<NavBar />
			<ProductPage />
		</div>
	);
}

export default App;
