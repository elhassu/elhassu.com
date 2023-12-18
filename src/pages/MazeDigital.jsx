import Mollie from "@/images/logos/mollie.png";
import MazeDigitalLogo from "@/images/logos/maze-digital.png";
import QuickBooks from "@/images/logos/quickbooks.png";
import MollieQuickBooks from "@/images/photos/mollie-quickbooks.png";
import FreshBooks from "@/images/logos/freshbooks.png";
import CarbonPayWalkThrough from "@/videos/carbonpay-walkthrough.mp4";
import { ArrowTrendingUpIcon, BuildingStorefrontIcon, CloudIcon, Cog6ToothIcon, StarIcon, TrophyIcon } from "@heroicons/react/24/solid";

export default function MazeDigital() {
	return (
		<>
			<div className="overflow-hidden py-16 my-16 sm:my-32">
				<div className="max-w-7xl pl-8 mt-8 lg:mt-0 lg:rounded-r-3xl lg:flex lg:mr-8 pb-8 bg-daintree-900">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
						<div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
							<h2 className="text-3xl font-bold tracking-tight text-celeste-100 sm:text-4xl pt-8">
								<img
									src={MazeDigitalLogo}
									className="h-16 w-22 inline-block mr-2"
									alt="Buddy Logo"
								/>
								Maze Digital
							</h2>
							<p className="mt-6 text-xl leading-8 text-celeste-200">
								During my tenure as a Junior Full Stack Developer at Maze Digital, I embarked on an
								exciting journey of growth and learning in the world of software development.
							</p>
							<p className="mt-6 text-base leading-7 text-celeste-200">
								I had the opportunity to work on various projects, with a focus on integrating
								third-party software solutions to streamline processes and enhance functionality.
							</p>
						</div>
						<div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
							<div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
								<img
									src={Mollie}
									alt=""
									className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
								/>
							</div>
							<div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
								<div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
									<img
										src={FreshBooks}
										alt=""
										className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
									/>
								</div>
								<div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
									<video
										className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
										preload="auto"
										loop
										autoPlay={true}
										muted
									>
										<source
											src={CarbonPayWalkThrough}
											type="video/mp4"
										/>
									</video>
								</div>
								<div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
									<img
										src={QuickBooks}
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
								<p className="text-base font-semibold leading-7 text-daintree-600">
									Unparalleled Connections
								</p>
								<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									Integration Expertise
								</h1>
								<p className="mt-6 text-xl leading-8 text-daintree-900">
									I successfully integrated third-party software systems, such as CarbonPay with
									Expensify, Sage Banking, FreshBooks, and QuickBooks, as well as Mollie with
									QuickBooks and Sage Accounting. These integrations were instrumental in optimising
									our clients' operations.
								</p>
							</div>
						</div>
					</div>
					<div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
						<img
							src={MollieQuickBooks}
							className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
							alt=""
						/>
					</div>
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
								<p>
									At Maze Digital, we helped businesses determine whether the time is right for them
									to go into a custom app; we helped them understand the benefits and allay their
									concerns.
								</p>
								<ul className="mt-8 space-y-8 text-gray-600">
									<li className="flex gap-x-3">
										<ArrowTrendingUpIcon
											className="mt-1 h-5 w-5 flex-none text-daintree-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">Cost Effective</strong>{" "}
											Misconception - Custom apps are expensive. Truth - Custom apps are
											cost-effective
										</span>
									</li>
									<li className="flex gap-x-3">
										<BuildingStorefrontIcon
											className="mt-1 h-5 w-5 flex-none text-daintree-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">Official Listings</strong>{" "}
											Marketplace listed integrations on QuickBooks, Sage Accounting and FreshBooks
										</span>
									</li>
									<li className="flex gap-x-3">
										<Cog6ToothIcon
											className="mt-1 h-5 w-5 flex-none text-daintree-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">Robust Applications</strong>{" "}
											Building robust applications that are scalable and reliable
										</span>
									</li>
								</ul>
								<p className="mt-8">
									At Maze Digital, I communicated with clients to understand their needs and
									developed custom solutions to meet their requirements. I also worked with
									third-party software providers to integrate their solutions with our clients'
									systems. Liaising with my superior, I developed several integrations for our
									clients, including: Mollie with QuickBooks and Sage Accounting, and CarbonPay with
									Expensify, Sage Banking, FreshBooks, and QuickBooks. These integrations were
									instrumental in optimising our clients' operations.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
									The beauty of integrations
								</h2>
								<p className="mt-6">
									Being able to integrate with third-party software solutions is a great way to
									enhance the functionality of your application. It allows you to focus on your core
									competencies while leveraging the expertise of other companies to provide a
									comprehensive solution to your customers. It was incredible for me to create such
									simple yet complex integrations, empowering our clients. I was able to learn a lot
									about the various software solutions available and how they can be used to
									optimise business operations, especially regarding accounting and banking.
								</p>
								<p className="mt-6">
									This experience has given me a deeper understanding of the importance of
									communication and collaboration. I have learned how to communicate effectively
									with clients and third-party software providers to understand their needs and
									develop custom solutions to meet their requirements. I have also learned how to
									communicate with my superior to ensure that the solutions I develop are in line
									with the company's vision and goals.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
