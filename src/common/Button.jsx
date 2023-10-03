import { Link } from "react-router-dom";

const variantStyles = {
	primary:
		"bg-daintree-800 font-semibold text-celeste-100 hover:bg-daintree-700 active:bg-daintree-800 active:text-celeste-100/70",
	secondary:
		"bg-celeste-50 font-medium text-celeste-900 hover:bg-celeste-100 active:bg-celeste-100 active:text-celeste-900/60",
};

export function Button({ variant = "primary", className, ...props }) {
	className =
		"inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none " +
		variantStyles[variant] +
		" " +
		className;

	if (typeof props.href === "undefined")
		return (
			<button
				className={className}
				{...props}
			/>
		);

	props.to = props.href;
	return (
		<Link
			className={className}
			{...props}
		/>
	);
}
