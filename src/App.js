import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "@/common/Footer";
import { routes } from "@/lib/Paths";
import { Header } from "@/common/Header";
import { Background } from "@/common/Background";

function App() {
	return (
		<main className="bg-daintree-900 w-full m-0 px-0 sm:px-20 md:px-32 lg:px-52">
			<div
				name="page"
				className="bg-celeste-100 z-0 opacity-100 min-h-screen overflow-clip py-2 relative"
			>
				<Background />
				<Header />
				<Routes>
					{routes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							element={<route.element path={route.path} />}
						/>
					))}
				</Routes>
				<Footer />
			</div>
		</main>
	);
}

export default App;
