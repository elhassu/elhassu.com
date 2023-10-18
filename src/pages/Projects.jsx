import { Card } from "@/common/Card";
import { SimpleLayout } from "@/common/SimpleLayout";
import { LinkIcon } from "@/icons/Icons";
import { GlobeAltIcon, MusicalNoteIcon, WrenchIcon } from "@heroicons/react/24/solid";
import { Helmet } from "@/common/Helmet";

const projects = [
	{
		name: "SocketBooks",
		description: "An on-going project. Assisting mechanics with their day-to-day operations.",
		link: { href: "", label: "Coming Soon" },
		logo: WrenchIcon,
	},
	{
		name: "Personal Website",
		description: "My personal website, built with React.js & Tailwind CSS. Hosted using Firebase.",
		logo: GlobeAltIcon,
		link: { href: "https://www.github.com/elhassu/elhassu.com", label: "github.com" },
	},
	{
		name: "Vectis",
		description:
			"An experimental heavy metal band from Malta. Composing compelling & moving music with empowering lyrics.",
		logo: MusicalNoteIcon,
	},
];

export default function Projects({ path }) {
	return (
		<>
			{/* <Helmet
				{...{
					title: "Projects | Keelan Vella",
					description:
						"Keelan Vella, an Entrepreneur and a Full Stack Developer with a relentless passion for software development.",
					path,
				}}
			/> */}
			<SimpleLayout
				title="Projects I've tackled to cast my influence across the world."
				intro="In my pursuit of various endeavors, I've taken on a host of smaller projects, but these are the ones that I cherish the most."
			>
				<ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<Card
							as="li"
							key={project.name}
						>
							<div className="relative z-0 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-celeste-800/5 ring-1 ring-celeste-900/5">
								{typeof project?.logo === "object" ? (
									<project.logo className="h-9 p-1 text-daintree-800" />
								) : (
									<img
										src={project.logo}
										alt=""
										className="h-8 w-8"
									/>
								)}
							</div>
							<h2 className="mt-6 text-base font-semibold text-celeste-800 group-hover:text-daintree-800">
								<Card.Link to={project.link?.href}>{project.name}</Card.Link>
							</h2>
							<Card.Description>
								<span className="group-hover:text-daintree-800">{project.description}</span>
							</Card.Description>
							{project.link?.label && (
								<p className="relative mt-6 flex text-sm font-medium text-celeste-200 transition group-hover:text-daintree-600">
									<LinkIcon className="h-6 w-6 flex-none" />
									<span className="ml-2">{project.link.label}</span>
								</p>
							)}
						</Card>
					))}
				</ul>
			</SimpleLayout>
		</>
	);
}
