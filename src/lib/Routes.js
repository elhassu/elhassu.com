const routes = [
	{ path: "/", label: "Home", updatedAt: "2023-12-27T16:57:19Z" },
	{ path: "/about", label: "About", updatedAt: "2023-12-27T16:57:19Z" },
	{
		path: "/experience",
		label: "Experience",
        updatedAt: "2023-12-27T16:57:19Z",
		subPaths: [
			{ path: "/buddy-hr", label: "Buddy HR" },
			{ path: "/maze-digital", label: "Maze Digital" },
		],
	},
	{ path: "/projects", label: "Projects", updatedAt: "2023-12-27T16:57:19Z" },
];

module.exports = { routes }