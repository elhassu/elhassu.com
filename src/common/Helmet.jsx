import { Helmet as ReactHelmet } from "react-helmet";

export function Helmet({
	title = "Keelan Vella",
	description = `Keelan Vella, an Entrepreneur and a Full Stack Developer with a relentless passion for software development.`,
	path,
	keywords,
}) {
	const pagePath = typeof path === "string" ? (path[0] === "/" ? path : `/${path}`) : "/";

	return (
		<ReactHelmet>
			<title>{title}</title>
			<meta
				name="description"
				content={description}
			/>
			<link
				rel="canonical"
				href={`https://www.elhassu.com${pagePath}`}
			/>
			{keywords && (
				<meta
					name="keywords"
					content={keywords}
				/>
			)}
			<meta
				property="og:url"
				content={`https://www.elhassu.com${pagePath}`}
			/>
			<meta
				property="og:title"
				content={title}
			/>
			<meta
				property="og:description"
				content={description}
			/>
			<meta
				name="twitter:card"
				content="summary_large_image"
			/>
			<meta
				name="twitter:site"
				content="@Keelan_El_Hassu"
			/>
			<meta
				name="twitter:title"
				content={title}
			/>
			<meta
				name="twitter:description"
				content={description}
			/>
		</ReactHelmet>
	);
}
