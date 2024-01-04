import { Helmet } from "@/common/Helmet";
import { Container } from "common/Container";
import FigmaDashboard from "@/images/photos/dashboard-figma.png";
import BambooHR from "@/images/logos/bamboo-hr.png";
import PayrollHistory from "@/images/photos/payroll-history.png";
import Mollie from "@/images/logos/mollie.png";
import PeoplesPension from "@/images/logos/peoples-pension.jpg";
import CarbonPay from "@/images/logos/carbon-pay.jpeg";
import BuddyLogo from "@/images/logos/buddy.png";
import MazeDigitalLogo from "@/images/logos/maze-digital.png";
import FreshBooks from "@/images/logos/freshbooks.png";
import QuickBooks from "@/images/logos/quickbooks.png";
import { Link } from "react-router-dom";

const linksVisibility = true;

export default function Experience() {
	return (
		<>
			<Helmet
				{...{
					title: "Experience | Keelan Vella",
					description:
						"Explore a collection of my most significant and impactful projects, providing a comprehensive overview of my skills, expertise, and dedication in the professional world.",
					path: "/experience",
					keywords: "Keelan Vella, Software Developer, Entrepreneur, Full Stack Developer, Buddy HR, Maze Digital, Experience",
				}}
			/>
			<Container as="header" className="mt-16 sm:mt-32">
				<h1 className="text-4xl font-bold tracking-tight text-daintree-800">
					Experiences That Shape My Professional Journey
				</h1>
				<div className="mt-6 space-y-7 text-base text-daintree-900">
					<p>
						Explore a collection of my most significant and impactful projects, providing a comprehensive
						overview of my skills, expertise, and dedication in the professional world.
					</p>
				</div>
			</Container>
			<div className="overflow-hidden pt-32 sm:-mb-14 sm:pt-14">
				<div className="bg-celeste-100">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="relative pb-16 pt-48 sm:pb-24">
							<div>
								<h3 className="text-2xl font-bold tracking-tight text-daintree-800 md:text-3xl">
									Full Stack Developer
								</h3>
								<h2
									id="experience-heading"
									className="text-4xl font-bold tracking-tight text-daintree-900 md:text-5xl"
								>
									<img
										src={BuddyLogo}
										className="h-16 w-16 inline-block mr-2"
										alt="Buddy Logo"
									/>
									Buddy HR
								</h2>
								{linksVisibility && (
									<div className="mt-6 text-base">
										<Link
											to="/experience/buddy-hr"
											className="font-small text-daintree-800 hover:text-daintree-900"
											aria-label="Learn more about my experience at Buddy HR"
										>
											Learn more about my experience &rarr;
										</Link>
									</div>
								)}
							</div>

							<div className="absolute my-8 sm:my-0 -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
								<div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
									<div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
										<div className="flex-shrink-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
												src={FigmaDashboard}
												alt=""
											/>
										</div>

										<div className="mt-6 flex-shrink-0 sm:mt-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72 bg-celeste-100"
												src={PayrollHistory}
												alt=""
											/>
										</div>
									</div>
									<div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
										<div className="flex-shrink-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
												src={BambooHR}
												alt=""
											/>
										</div>

										<div className="mt-6 flex-shrink-0 sm:mt-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
												src={PeoplesPension}
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="overflow-hidden pt-32 sm:pt-14">
				<div className="bg-daintree-900">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="relative pb-16 pt-48 sm:pb-24">
							<div className="absolute -top-32 sm:right-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
								<div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
									<div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
										<div className="flex-shrink-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
												src={FreshBooks}
												alt=""
											/>
										</div>

										<div className="mt-6 flex-shrink-0 sm:mt-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72 bg-celeste-100"
												src={QuickBooks}
												alt=""
											/>
										</div>
									</div>
									<div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
										<div className="flex-shrink-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
												src={CarbonPay}
												alt=""
											/>
										</div>

										<div className="mt-6 flex-shrink-0 sm:mt-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
												src={Mollie}
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
							<div>
								<h3 className="text-2xl text-right font-bold tracking-tight text-celeste-200 md:text-3xl">
									Junior Full Stack Developer
								</h3>
								<h2
									id="experience-heading"
									className="text-4xl text-right font-bold tracking-tight text-celeste-100 md:text-5xl"
								>
									Maze Digital
									<img
										src={MazeDigitalLogo}
										className="h-16 aspect-auto inline-block ml-2"
										alt="Maze Digital Logo"
									/>
								</h2>
								{linksVisibility && (
									<div className="mt-6 text-right text-base">
										<Link
											to="/experience/maze-digital"
											aria-label="Learn more about my experience at Maze Digital"
											className="font-small text-celeste-100 hover:text-celeste-200"
										>
											Learn more about my experience &rarr;
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
