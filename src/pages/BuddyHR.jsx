import DashboardFigma from "@/images/photos/dashboard-figma.png";
import BambooHR from "@/images/logos/bamboo-hr.png";
import PayrollHistory from "@/images/photos/payroll-history.png";
import PeoplesPension from "@/images/logos/peoples-pension.jpg";
import BuddyLogo from "@/images/logos/buddy.png";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";

export default function BuddyHR() {
	return (
		<>
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
								<p className="text-base font-semibold leading-7 text-daintree-600">Reimagined UI</p>
								<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									An enhanced experience
								</h1>
								<p className="mt-6 text-xl leading-8 text-daintree-900">
									Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui
									mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.
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
									Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
									mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
									penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa
									rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
									vitae sed turpis id.
								</p>
								<ul
									className="mt-8 space-y-8 text-gray-600"
								>
									<li className="flex gap-x-3">
										<CloudArrowUpIcon
											className="mt-1 h-5 w-5 flex-none text-daintree-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">Push to deploy.</strong>{" "}
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
											perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
										</span>
									</li>
									<li className="flex gap-x-3">
										<LockClosedIcon
											className="mt-1 h-5 w-5 flex-none text-daintree-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">SSL certificates.</strong>{" "}
											Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
											cupidatat commodo.
										</span>
									</li>
									<li className="flex gap-x-3">
										<ServerIcon
											className="mt-1 h-5 w-5 flex-none text-daintree-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">Database backups.</strong>{" "}
											Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit
											morbi lobortis.
										</span>
									</li>
								</ul>
								<p className="mt-8">
									Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
									blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel.
									Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac
									tempor et ut. Ac lorem vel integer orci.
								</p>
								<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
									No server? No problem.
								</h2>
								<p className="mt-6">
									Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis
									arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat
									vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris.
									Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
									ipsum eu a sed convallis diam.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
