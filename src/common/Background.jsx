import { ReactComponent as Hexagon } from "@/shapes/hexagon/vertical.svg";

function ColouredHexagon() {
	const offset = Math.floor(Math.random() * 3);
	const colorOffset = offset+7
    console.log(colorOffset)
	return <Hexagon className={`text-daintree-${colorOffset}00 h-36 w-32`} />;
}

export function Background() {
	return (
		<div className="relative -z-10 -right-40 scale-50 sm:scale-75 md:scale-90 lg:scale-100">
			<div className="absolute right-0 rotate-45 w-96 grid grid-cols-3 opacity-50">
				{Array.from({ length: 3 }).map((i) => (
					<ColouredHexagon />
				))}
			</div>
			<div className="absolute right-32 top-8 rotate-45 w-96 grid grid-cols-3 opacity-50">
				{Array.from({ length: 3 }).map((i) => (
					<ColouredHexagon />
				))}
			</div>
		</div>
	);
}
