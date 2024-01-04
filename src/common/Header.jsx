import { paths } from "@/lib/Paths";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

function MobileNavItem({ to, children }) {
	return (
		<li>
			<Popover.Button
				as={Link}
				to={to}
				className="block py-2"
			>
				{children}
			</Popover.Button>
		</li>
	);
}

export function Header() {
	const location = useLocation();

	const path = location.pathname;

	return (
		<div className="sticky top-4 z-10">
			<nav
				className="hidden bg-celeste-100 border shadow-md border-celeste-200 px-6 py-1 rounded-full w-fit mx-auto sm:flex sm:gap-x-12"
				role="navigation"
			>
				{paths.map((item) => {
					const active = path === item.path ? "text-daintree-600 border-daintree-600" : "text-celeste-900";
					return (
						<Link
							key={item.label}
							to={item.path}
							className={`text-sm font-semibold ${active} leading-6 border-b-2 border-transparent hover:border-daintree-600 hover:text-daintree-600 transition-colors`}
						>
							{item.label}
						</Link>
					);
				})}
			</nav>
			<nav
				role="navigation"
				className="flex items-center sm:hidden justify-end px-6 lg:px-8"
				aria-label="Global"
			>
				<Popover>
					<Popover.Button className="group flex items-center rounded-full bg-celeste-100/90 px-4 py-2 text-sm font-medium text-celeste-800 shadow-lg shadow-celeste-800/5 ring-1 ring-celeste-900/5 backdrop-blur">
						Menu
						<ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700" />
					</Popover.Button>
					<Transition.Root>
						<Transition.Child
							as={Fragment}
							enter="duration-150 ease-out"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="duration-150 ease-in"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Popover.Overlay className="fixed inset-0 bg-black/20 z-50 backdrop-blur-sm" />
						</Transition.Child>
						<Transition.Child
							as={Fragment}
							enter="duration-150 ease-out"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="duration-150 ease-in"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Popover.Panel
								focus
								className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 ring-1 ring-celeste-900/5 bg-celeste-100 ring-celeste-800"
							>
								<div className="flex flex-row-reverse items-center justify-between">
									<Popover.Button
										aria-label="Close menu"
										className="-m-1 p-1"
									>
										<XMarkIcon className="h-6 w-6 text-celeste-400" />
									</Popover.Button>
									<h2 className="text-sm font-medium text-celeste-900">Navigation</h2>
								</div>
								<nav className="mt-6">
									<ul className="-my-2 divide-y divide-celeste-300 text-base text-celeste-800">
										{paths.map((item) => (
											<MobileNavItem
												key={item.label}
												to={item.path}
											>
												{item.label}
											</MobileNavItem>
										))}
									</ul>
								</nav>
							</Popover.Panel>
						</Transition.Child>
					</Transition.Root>
				</Popover>
			</nav>
		</div>
	);
}
