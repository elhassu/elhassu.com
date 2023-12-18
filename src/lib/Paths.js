import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import BuddyHR from "@/pages/BuddyHR";
import MazeDigital from "@/pages/MazeDigital";
import { Link } from "react-router-dom";

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
	"/experience": {
		label: "Experience",
		element: <Experience />,
		subPaths: {
			"buddy-hr": {
				label: "Buddy HR",
				element: <BuddyHR />,
			},
			"maze-digital": {
				label: "Maze Digital",
				element: <MazeDigital />,
			},
		},
	},
	// "/education": {
	// 	label: "Education",
	// 	element: <About />,
	// },
	"/projects": {
		label: "Projects",
		element: <Projects />,
	},
};

export function SocialLink({ icon: Icon, ...props }) {
	return (
		<Link
			className="group -m-1 p-1"
			{...props}
			target="_blank"
			rel="noreferrer"
		>
			<Icon className="h-6 w-6 fill-daintree-700 transition group-hover:fill-daintree-800" />
		</Link>
	);
}

export const routes = convertToRoutes(components);

export const paths = Object.entries(components).map(([path, { label }]) => ({ path, label }));
