import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";

import { GlobalStyles } from "./GlobalStyles";

// Context
import UserInfoProvider from "./context";

function App() {
	return (
		<UserInfoProvider>
			<GlobalStyles />
			<NavBar />
			<ProductPage />
		</UserInfoProvider>
	);
}

export default App;
