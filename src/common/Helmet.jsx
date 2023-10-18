import { Helmet as ReactHelmet } from "react-helmet";

export function Helmet({ title, description, path, children }) {
	const pagePath = typeof path === "string" ? (path[0] === "/" ? path : `/${path}`) : "/";

	return (
		<ReactHelmet>
			<title>{title ? title : `Keelan Vella`}</title>
			<meta
				name="description"
				content={
					description
						? description
						: `Keelan Vella, an Entrepreneur and a Full Stack Developer with a relentless passion for software development.`
				}
			/>
			<link
				rel="canonical"
				href={`https://www.elhassu.com${pagePath}`}
			/>
		</ReactHelmet>
	);
}
