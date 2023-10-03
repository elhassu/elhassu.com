import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ReactComponent as Hexagon } from "@/shapes/hexagon/vertical.svg";
import { Footer } from "@/common/Footer";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const paths = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <> </>,
		// element: <About />,
	},
	{
		path: "/projects",
		element: <> </>,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];

function App() {
	return (
		<main className="bg-daintree-900 w-full m-0 px-0 sm:px-20 md:px-32 lg:px-52">
			<div
				name="page"
				className="bg-celeste-100 z-0 opacity-100 min-h-screen overflow-clip py-2"
			>
				<div className="relative z-10 -right-40 scale-50 sm:scale-75 md:scale-90 lg:scale-100">
					<div className="absolute right-0 rotate-45 w-96 grid grid-cols-3 opacity-50">
						<Hexagon className="text-daintree-800 h-36 w-32" />
						<Hexagon className="text-daintree-700 h-36 w-32" />
						<Hexagon className="text-daintree-900 h-36 w-32" />
					</div>
					<div className="absolute right-32 top-8 rotate-45 w-96 grid grid-cols-3 opacity-50">
						<Hexagon className="text-daintree-700 h-36 w-32" />
						<Hexagon className="text-daintree-900 h-36 w-32" />
						<Hexagon className="text-daintree-600 h-36 w-32" />
					</div>
				</div>
				<Routes>
					{paths.map(({ path, element }) => (
						<Route
							key={path}
							path={path}
							element={element}
						/>
					))}
				</Routes>
				<Footer />
			</div>
		</main>
	);
}

export default App;
