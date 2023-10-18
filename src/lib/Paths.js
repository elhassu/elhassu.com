import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import Projects from "@/pages/Projects";

const components = {
	"/": {
		label: "Home",
		element: <Home />,
	},
	"/about": {
		label: "About",
		element: <About />,
	},
	// "/experience": {
	// 	label: "Experience",
	// 	element: <About />,
	// },
	// "/education": {
	// 	label: "Education",
	// 	element: <About />,
	// },
	"/projects": {
		label: "Projects",
		element: <Projects />,
	},
};

export const routes = Object.entries(components)
	.map(([path, { element }]) => ({ path, element }))
	.concat({ path: "*", element: <NotFound /> });

export const paths = Object.entries(components).map(([path, { label }]) => ({ path, label }));
