import { Link } from "react-router-dom";

import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "@/icons/SocialIcons.jsx";
import logoBuddy from "@/images/logos/buddy.png";
import logoLidl from "@/images/logos/lidl.png";
import logoStarbucks from "@/images/logos/starbucks.svg";
import image1 from "@/images/photos/image-1.jpg";
import image2 from "@/images/photos/image-2.jpg";
import image3 from "@/images/photos/image-3.jpg";
import image4 from "@/images/photos/image-4.jpg";
import image5 from "@/images/photos/image-5.jpg";
import { getDuration } from "@/lib/formatDate";
import { format } from "date-fns";

function MailIcon(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
				className="fill-celeste-100 stroke-celeste-400"
			/>
			<path
				d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
				className="stroke-celeste-400"
			/>
		</svg>
	);
}

function BriefcaseIcon(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
				className="fill-celeste-100 stroke-daintree-800"
			/>
			<path
				d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
				className="stroke-daintree-700"
			/>
		</svg>
	);
}

function ArrowDownIcon(props) {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function SocialLink({ icon: Icon, ...props }) {
	return (
		<Link
			className="group -m-1 p-1"
			{...props}
		>
			<Icon className="h-6 w-6 fill-daintree-700 transition group-hover:fill-daintree-800" />
		</Link>
	);
}

function Role({ role }) {
	let startLabel = typeof role.start === "string" ? role.start : role.start?.label;
	let startDate = typeof role.start === "string" ? role.start : role.start?.dateTime;

	let endLabel = typeof role.end === "string" ? role.end : role.end?.label;
	let endDate = typeof role.end === "string" ? role.end : role.end?.dateTime;

	return (
		<li className="flex gap-4">
			<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-daintree-800/5 ring-daintree-900/5 border border-daintree-700/50 bg-daintree-800 ring-0">
				<img
					src={role.logo}
					alt=""
					className="h-7 w-7 rounded-full"
				/>
			</div>
			<dl className="flex flex-auto flex-wrap gap-x-2">
				<dt className="sr-only">Company</dt>
				<dd className="w-full flex-none text-sm font-medium text-daintree-900">{role.company}</dd>
				<dt className="sr-only">Role</dt>
				<dd className="text-xs text-celeste-500">
					{role.title}
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

function Resume({ title = "Work", Icon = BriefcaseIcon, resume }) {
	return (
		<div className="rounded-2xl border border-daintree-700 p-6">
			<h2 className="flex text-sm font-semibold text-daintree-800">
				<Icon className="h-6 w-6 flex-none" />
				<span className="font-title font-bold text-md ml-3 mt-1 uppercase">{title}</span>
			</h2>
			<ol className="mt-6 space-y-4">
				{resume.map((role, roleIndex) => (
					<Role
						key={roleIndex}
						role={role}
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
				<h2 className="font-title text-5xl leading-snug text-daintree-800 font-semibold">Keelan</h2>
				<h1 className="font-title text-7xl leading-10 tracking-widest font-bold text-daintree-900">Vella</h1>
				<h3 className="font-title text-xl leading-relaxed tracking-widest text-daintree-900 font-bold">
					Full Stack Developer
				</h3>
			</div>
			<p className="mx-16 mt-6 text-base text-daintree-800">
				I’m Keelan, a full stack developer and entrepreneur based in Malta.
			</p>
			<div className="ml-16 mt-6 flex gap-6">
				<SocialLink
					to="https://twitter.com"
					aria-label="Follow on Twitter"
					icon={TwitterIcon}
				/>
				<SocialLink
					to="https://instagram.com"
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
			<div className="mt-8 mx-auto px-16 grid max-w-xl grid-cols-1 gap-y-20 gap-8 lg:max-w-none lg:grid-cols-2">
				<div className="space-y-10">
					<Resume
						resume={[
							{
								company: "Buddy Ltd",
								title: "Junior Software Developer",
								logo: logoBuddy,
								start: "11/2021",
								end: {
									label: "Present",
									dateTime: format(new Date(), "MM/yyyy")
								},
							},
							{
								company: "Lidl Malta",
								title: "Sales Assistant",
								logo: logoLidl,
								start: "08/2020",
								end: "01/2022",
							},
							{
								company: "Ambika Confectionary",
								title: "Sales Assistant",
								logo: logoStarbucks,
								start: "06/2018",
								end: "06/2019",
							},
						]}
					/>
				</div>
				<div className="space-y-10">
					<Resume
						{...{
							title: "Education",
							resume: [
								{
									company: "Fireship.io",
									title: "NextJS Firebase Course",
									logo: logoBuddy,
								},
								{
									company: "MCAST",
									title: "Advanced Diploma in Software Development",
									logo: logoLidl,
								},
								{
									company: "Malta Visual & Performing Arts School",
									title: "Matriculation Certificate",
									logo: logoStarbucks,
								},
							],
						}}
					/>
				</div>
			</div>
			<Photos />
		</>
	);
}
