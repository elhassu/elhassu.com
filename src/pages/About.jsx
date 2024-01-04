import { Link } from "react-router-dom";

import { Container } from "@/common/Container";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/icons/SocialIcons";
import portraitImage from "@/images/portrait.jpg";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Helmet } from "@/common/Helmet";

function SocialLink({ className, href, children, icon: Icon, ...props }) {
	return (
		<li className={`${className} flex`}>
			<Link
				to={href}
				target="_blank"
				className="group flex text-sm font-medium text-daintree-800 transition hover:text-daintree-700"
				{...props}
			>
				<Icon className="h-6 w-6 flex-none fill-daintree-800 transition group-hover:fill-daintree-700 text-daintree-900" />
				<span className="ml-4">{children}</span>
			</Link>
		</li>
	);
}

export default function About() {
	return (
		<>
			<Helmet
				{...{
					title: "About | Keelan Vella",
					description:
						"Keelan Vella, an Entrepreneur and a Full Stack Developer with a relentless passion for software development.",
					path: "/about",
					keywords: "Keelan Vella, Software Developer, Entrepreneur, Full Stack Developer",
				}}
			/>
			<Container className="mt-16 sm:mt-32">
				<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
					<div className="lg:pl-20">
						<div className="max-w-xs px-2.5 lg:max-w-none">
							<img
								src={portraitImage}
								alt="Keelan Vella"
								sizes="(min-width: 1024px) 32rem, 20rem"
								className="aspect-square rotate-3 rounded-2xl bg-daintree-100 object-cover"
							/>
						</div>
					</div>

					<div className="lg:order-first lg:row-span-2">
						<header className="mt-6 space-y-7 text-base text-daintree-900">
							<h1 className="text-4xl font-bold tracking-tight text-daintree-800">
								I'm Keelan Vella, a full stack developer and entrepreneur.
							</h1>
							<p>
								I'm Keelan Vella, a Full Stack Developer with a relentless passion for software
								development. With two years of professional experience, I've logged countless hours of
								overtime, showcasing my unwavering dedication.
							</p>
						</header>

						<section className="mt-6 space-y-7 text-base text-daintree-900">
							<p>
								My educational background includes an Advanced Diploma in Software Development (MQF
								Level 4), and I'm currently enrolled in an enriching Firebase-Next.js course by
								Fireship.
							</p>
							<p>
								I take pride in my meticulous attention to detail and my commitment to delivering
								excellence. Beyond coding, I've seamlessly integrated various software solutions with
								payment systems, accounting software like Xero and QuickBooks, HRIS like BambooHR, and
								pension providers like People's Pension and Smart Pension.
							</p>
							<p>
								Looking ahead, my career aspirations include personal and professional growth in the
								software development sector. I'm passionate about expanding my knowledge and skills and,
								in the long run, transitioning into management and leadership roles.
							</p>
							<p>
								Currently, I'm employed at Buddy HR, where I'm actively contributing to innovative
								projects, and I also work on side projects at Maze Digital. Outside of work, I'm a
								guitarist and music enthusiast, an avid fitness enthusiast, and a hobbyist automotive
								mechanic. Reading is another of my lifelong pursuits.
							</p>
						</section>
					</div>
					<aside
						aria-label="Social Links"
						className="lg:pl-20"
					>
						<ul>
							<SocialLink
								href="https://www.instagram.com/keelan_velafa/"
								icon={InstagramIcon}
								aria-label="Follow on Instagram"
								aria-description="Follow Keelan on Instagram"
								className="mt-4"
							>
								Follow on Instagram
							</SocialLink>
							<SocialLink
								href="https://github.com/elhassu"
								icon={GitHubIcon}
								aria-label="Follow on GitHub"
								aria-description="Follow Keelan on GitHub"
								className="mt-4"
							>
								Follow on GitHub
							</SocialLink>
							<SocialLink
								href="https://www.linkedin.com/in/keelan-vella/"
								icon={LinkedInIcon}
								aria-label="Follow on LinkedIn"
								aria-description="Follow Keelan on LinkedIn"
								className="mt-4"
							>
								Follow on LinkedIn
							</SocialLink>
							<SocialLink
								href="mailto:keelan@elhassu.com"
								icon={EnvelopeIcon}
								aria-label="Email"
								aria-description="Contact Keelan via Email"
								className="mt-8 border-t border-daintree-800 pt-8"
							>
								keelan@elhassu.com
							</SocialLink>
						</ul>
					</aside>
				</div>
			</Container>
		</>
	);
}
