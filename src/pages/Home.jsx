import { BriefcaseIcon } from "@/icons/Icons.jsx";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/icons/SocialIcons.jsx";
import logoBuddy from "@/images/logos/buddy.png";
import logoFireShip from "@/images/logos/fireship.jpeg";
import logoLidl from "@/images/logos/lidl.png";
import logoMCAST from "@/images/logos/mcast.png";
import logoMVPA from "@/images/logos/mvpa.png";
import logoMaze from "@/images/logos/maze-digital.png";
import image1 from "@/images/photos/image-1.jpg";
import image2 from "@/images/photos/image-2.jpg";
import image3 from "@/images/photos/image-3.jpg";
import image4 from "@/images/photos/image-4.jpg";
import image5 from "@/images/photos/image-5.jpg";
import { getDuration, getMonthYear } from "@/lib/formatDate";
import {
	ArchiveBoxIcon,
	ArrowTopRightOnSquareIcon,
	BuildingStorefrontIcon,
	GlobeAltIcon,
	MusicalNoteIcon,
} from "@heroicons/react/24/solid";
import { AcademicHat } from "@/icons/Icons";
import { Link } from "react-router-dom";

const experience = [
	{
		company: "Buddy HR",
		title: "Junior Full Stack Developer",
		href: "https://www.buddy.hr",
		logo: logoBuddy,
		start: "11/2021",
		end: {
			label: "Present",
			dateTime: getMonthYear(new Date()),
		},
	},
	{
		company: "Maze Digital",
		title: "Junior Full Stack Developer",
		href: "https://www.maze.digital",
		logo: logoMaze,
		start: "06/2021",
		end: "01/2022",
	},
	{
		company: "Lidl Malta",
		title: "Sales Assistant",
		href: "https://www.lidl.com.mt",
		round: true,
		logo: logoLidl,
		start: "08/2020",
		end: "12/2020",
	},
	{
		company: "Ambika Confectionary",
		title: "Sales Assistant",
		logo: BuildingStorefrontIcon,
		start: "06/2020",
		end: "06/2019",
	},
];

const education = [
	{
		company: "Fireship.io",
		title: "NextJS Firebase Course",
		href: "https://fireship.io",
		logo: logoFireShip,
		round: true,
	},
	{
		company: "MCAST",
		href: "https://mcast.edu.mt",
		title: "Advanced Diploma in Software Development",
		logo: logoMCAST,
		round: true,
	},
	{
		company: "Malta Visual & Performing Arts School",
		title: "Matriculation Certificate",
		logo: logoMVPA,
		round: true,
	},
];

const projects = [
	{
		company: "Personal Website",
		title: "www.elhassu.com",
		logo: GlobeAltIcon,
	},
	{
		company: "Vectis",
		title: "Guitars",
		logo: MusicalNoteIcon,
		start: "11/2019",
		end: "03/2022",
	},
];

function SocialLink({ icon: Icon, ...props }) {
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

function Showcase({ showcase }) {
	let startLabel = typeof showcase.start === "string" ? showcase.start : showcase.start?.label;
	let startDate = typeof showcase.start === "string" ? showcase.start : showcase.start?.dateTime;

	let endLabel = typeof showcase.end === "string" ? showcase.end : showcase.end?.label;
	let endDate = typeof showcase.end === "string" ? showcase.end : showcase.end?.dateTime;

	return (
		<li className="flex gap-4">
			<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-daintree-800/5 ring-daintree-900/5 border border-daintree-700/50 bg-daintree-800 ring-0">
				{typeof showcase?.logo === "object" ? (
					<showcase.logo className="h-9 p-1 text-celeste-200" />
				) : (
					<img
						src={showcase.logo}
						alt=""
						className={`h-9 p-1 object-contain ${showcase.round ? "rounded-full" : ""}`}
					/>
				)}
			</div>
			<dl className="flex flex-auto flex-wrap gap-x-2">
				<dt className="sr-only">Company</dt>
				<dd className="w-full flex-none text-sm font-medium text-daintree-900">
					{showcase.company}
					{showcase.href && (
						<a
							className="inline-flex justify-start align-baseline"
							href={showcase.href}
							target="_blank"
							rel="noreferrer"
						>
							<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1 text-daintree-800" />
						</a>
					)}
				</dd>
				<dt className="sr-only">Showcase</dt>
				<dd className="text-xs text-celeste-500">
					{showcase.title}
					{getDuration(startDate, endDate)}
				</dd>
				{startDate && endDate && (
					<>
						<dt className="sr-only">Date</dt>
						<dd
							className="ml-auto text-xs text-celeste-400"
							aria-label={`${startLabel} until ${endLabel}`}
						>
							<time dateTime={startDate}>{startLabel}</time> <span aria-hidden="true">—</span>{" "}
							<time dateTime={endDate}>{endLabel}</time>
						</dd>
					</>
				)}
			</dl>
		</li>
	);
}

function Portfolio({ title = "Experience", Icon = BriefcaseIcon, portfolio }) {
	return (
		<div className="rounded-2xl border border-daintree-700 p-6 h-full">
			<h2 className="flex text-sm font-semibold text-daintree-800">
				<Icon className="h-6 w-6 flex-none" />
				<span className="font-title font-bold text-md ml-3 mt-1 uppercase">{title}</span>
			</h2>
			<ol className="mt-6 space-y-4">
				{portfolio.map((showcase, showcaseIndex) => (
					<Showcase
						key={showcaseIndex}
						showcase={showcase}
					/>
				))}
			</ol>
		</div>
	);
}

function Photos() {
	let rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
				{[image1, image2, image3, image4, image5].map((image, imageIndex) => (
					<div
						key={image.src}
						className={
							"relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-celeste-100 sm:w-72 sm:rounded-2xl " +
							rotations[imageIndex % rotations.length]
						}
					>
						<img
							src={image}
							alt=""
							sizes="(min-width: 640px) 18rem, 11rem"
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<>
			<div className="ml-16 pt-20 uppercase">
				<h2 className="font-title text-2xl md:text-5xl leading-snug text-daintree-800 font-semibold">Keelan</h2>
				<h1 className="font-title text-4xl md:text-7xl leading-5 md:leading-10 tracking-widest font-bold text-daintree-900">
					Vella
				</h1>
				<h3 className="font-title text-lg md:text-xl leading-relaxed tracking-widest text-daintree-900 font-bold">
					Full Stack Developer
				</h3>
			</div>
			<p className="mx-16 mt-6 text-sm md:text-base text-daintree-800">
				I'm Keelan, an entrepreneur and a Junior Full Stack Developer with a relentless passion for software
				development
			</p>
			<div className="ml-16 mt-6 flex gap-6">
				<SocialLink
					to="https://www.instagram.com/keelan_velafa/"
					aria-label="Follow on Instagram"
					icon={InstagramIcon}
				/>
				<SocialLink
					to="https://github.com/elhassu"
					aria-label="Follow on GitHub"
					icon={GitHubIcon}
				/>
				<SocialLink
					to="https://www.linkedin.com/in/keelan-vella/"
					aria-label="Follow on LinkedIn"
					icon={LinkedInIcon}
				/>
			</div>

			<div className="mt-8 mx-auto px-8 md:px-16 grid max-w-xl grid-cols-1 gap-y-10 gap-8 lg:max-w-none lg:grid-cols-2">
				<div className="space-y-6">
					<Portfolio portfolio={experience} />
				</div>
				<div className="space-y-10">
					<Portfolio
						{...{
							title: "Education",
							Icon: AcademicHat,
							portfolio: education,
						}}
					/>
				</div>
			</div>

			<Photos />

			<div className="mt-16 mx-auto px-8 md:px-16 lg:px-36 xl:px-52 grid max-w-xl grid-cols-1 gap-y-10 gap-8 lg:max-w-none">
				<Portfolio {...{ title: "Projects", Icon: ArchiveBoxIcon, portfolio: projects }} />
			</div>
		</>
	);
}
