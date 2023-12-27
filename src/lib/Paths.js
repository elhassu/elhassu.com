import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import BuddyHR from "@/pages/BuddyHR";
import MazeDigital from "@/pages/MazeDigital";
import { Link } from "react-router-dom";
import { routes as Routes } from "./Routes";

const convertToRoutes = (components) => {
	if (!(components instanceof Object)) return [];
	return Object.entries(components)
		.map(([path, { element, subPaths }]) => ({
			path,
			element,
			subPaths: convertToRoutes(subPaths),
		}))
		.concat({ path: "*", element: NotFound });
};

const importedComponents = {
	"Home": Home,
	"About": About,
	"Projects": Projects,
	"Experience": Experience,
	"Buddy HR": BuddyHR,
	"Maze Digital": MazeDigital,
};

const mapLabelToComponent = (label) => {
	return importedComponents[label];
};

const components = Routes.reduce((acc, { path, label, subPaths }) => {
	if (subPaths?.length) {
		return {
			...acc,
			[path]: {
				label,
				element: mapLabelToComponent(label),
				subPaths: subPaths.reduce((acc, { path, label }) => {
					return {
						...acc,
						[path]: {
							element: mapLabelToComponent(label),
						},
					};
				}, {}),
			},
		};
	}
	return {
		...acc,
		[path]: {
			label,
			element: mapLabelToComponent(label),
		},
	};
}, {});

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
