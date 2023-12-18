import BambooHR from "@/images/logos/bamboo-hr.png";
import BuddyLogo from "@/images/logos/buddy.png";
import PeoplesPension from "@/images/logos/peoples-pension.jpg";
import DashboardFigma from "@/images/photos/dashboard-figma.png";
import PayrollHistory from "@/images/photos/payroll-history.png";
import { CloudIcon, StarIcon, TrophyIcon } from "@heroicons/react/24/solid";
import { Helmet } from "@/common/Helmet";

export default function BuddyHR() {
	return (
		<>
			<Helmet
				{...{
					title: "Buddy HR | Keelan Vella",
					description:
						"My experience as a Full Stack Developer at Buddy HR. Developing custom, user-centric payroll solutions for the Maltese & British markets.",
					path: "/experience/buddy-hr",
				}}
			/>
			<div className="overflow-hidden py-16 my-16 sm:my-32">
				<div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
						<div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
							<h2 className="text-3xl font-bold tracking-tight text-daintree-900 sm:text-4xl">
								<img
									src={BuddyLogo}
									className="h-16 w-16 inline-block mr-2"
									alt="Buddy Logo"
								/>
								Buddy HR
							</h2>
							<p className="mt-6 text-xl leading-8 text-celeste-700">
								In my role as a Full Stack Developer at Buddy HR, I take a hands-on approach to software
								development, ensuring that our solutions align with the company's strategic objectives.
							</p>
							<p className="mt-6 text-base leading-7 text-celeste-700">
								I'm responsible for planning, developing, reviewing, and deploying code, all with a
								strong focus on enhancing user experiences and helping Buddy HR reach its goals.
							</p>
						</div>
						<div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
							<div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
								<img
									src={PayrollHistory}
									alt=""
									className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
								/>
							</div>
							<div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
								<div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
									<img
										src={PeoplesPension}
										alt=""
										className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
									/>
								</div>
								<div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
									<img
										src={DashboardFigma}
										alt=""
										className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
									/>
								</div>
								<div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
									<img
										src={BambooHR}
										alt=""
										className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="lg:max-w-lg">
								<p className="text-base font-semibold leading-7 text-daintree-600">Reimagined UI/UX</p>
								<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									An enhanced experience
								</h1>
								<p className="mt-6 text-xl leading-8 text-daintree-900">
									Every step of the way, we've thought about how to make the experience better for our
									users. It always starts with the client, how they view and interact with our
									product. We've made it easier to navigate, and more intuitive to use.
								</p>
							</div>
						</div>
					</div>
					<div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
						<img
							className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
							src={DashboardFigma}
							alt=""
						/>
					</div>
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
								<p>
									It all started from making one jagged edge smooth. I've taken that approach to
									everything I do. Along with my team, we've revolutionised the way our users view
									payroll as a whole. From dreading the process, to looking forward to it.
								</p>
								<ul className="mt-8 space-y-8 text-gray-600">
									<li className="flex gap-x-3">
										<StarIcon
											className="mt-1 h-5 w-5 flex-none text-daintree-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">User-Centric Design</strong>{" "}
											Simple and intuitive, less clutter, more focus on what matters.
										</span>
									</li>
									<li className="flex gap-x-3">
										<CloudIcon
											className="mt-1 h-5 w-5 flex-none text-daintree-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">One step ahead</strong>{" "}
											Always innovating, always improving, always looking for ways to make things
											better.
										</span>
									</li>
									<li className="flex gap-x-3">
										<TrophyIcon
											className="mt-1 h-5 w-5 flex-none text-daintree-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">Drive for success</strong>{" "}
											There is no finish line, there is no second best. Striving for excellence
											every step of the way.
										</span>
									</li>
								</ul>
								<p className="mt-8">
									I do not believe in the status quo. I believe in pushing the boundaries of what is
									possible, and making the impossible, possible. When I work on a project, I always
									ask myself, "How can I make this better?". I believe that there is always room for
									improvement. While there is no real definition of perfection, I believe that we can
									always strive for it. The journey is the end goal.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
									The importance of outside perspective
								</h2>
								<p className="mt-6">
									When I first joined Buddy HR, I was never tasked with the job of improving the
									UI/UX. I was tasked with building new features, fixing bugs and responding to
									support tickets. However, I always used to put myself in the shoes of the user. How
									would I feel if I was using this product? What would I change? What would I improve?
									I would always ask myself these questions, and I would always come up with a list of
									things that I would change. I would then take this list to my team, and we would
									discuss the changes that we would make.
								</p>
								<p className="mt-6">
									By time, these minor changes slowly changed a dated looking UI into a relatively
									modernised version, with less clutter and a more objective interface. Centering the
									user experience around the employees, who are the very end users. By making the
									experience better for; Advisors, Managers, Payroll Officers and employees, we've
									essentially captured the very essence of what makes Buddy HR, Buddy HR. Your people
									first.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
