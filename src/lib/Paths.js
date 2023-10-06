import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";

const components = {
	"/": {
		label: "Home",
		element: <Home />,
	},
	"/about": {
		label: "About",
		element: <About />,
	},
	"/projects": {
		label: "Projects",
		element: <></>,
	},
};

export const routes = Object.entries(components)
	.map(([path, { element }]) => ({ path, element }))
	.concat({ path: "*", element: <NotFound /> });

export const paths = Object.entries(components).map(([path, { label }]) => ({ path, label }));
