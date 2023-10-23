import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
// import Experience from "pages/Experience";

const convertToRoutes = (components) => {
	if (!(components instanceof Object)) return [];
	return Object.entries(components)
		.map(([path, { element, subPaths }]) => ({
			path,
			element,
			subPaths: convertToRoutes(subPaths),
		}))
		.concat({ path: "*", element: <NotFound /> });
};

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
	// 	element: <Experience />,
	// 	subPaths: {
	// 		"buddy-hr": {
	// 			label: "Buddy HR",
	// 			element: <Experience />,
	// 		},
	// 		"maze-digital": {
	// 			label: "Maze Digital",
	// 			element: <Experience />,
	// 		},
	// 	},
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

export const routes = convertToRoutes(components);

export const paths = Object.entries(components).map(([path, { label }]) => ({ path, label }));
