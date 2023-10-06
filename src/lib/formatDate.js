import { format, formatDuration, intervalToDuration, parse } from "date-fns";

export function formatDate(dateString) {
	return new Date(`${dateString}T00:00:00Z`).toLocaleDateString(undefined, {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	});
}

export function getDuration(start, end) {
	if (!end || !start) return null;

	const startDate = parse(start, "MM/yyyy", new Date());
	const endDate = parse(end, "MM/yyyy", new Date());

	const { years, months } = intervalToDuration({ start: startDate, end: endDate });

	return `${years || months ? " - " : null}${formatDuration({ months, years }, { delimiter: " & " })}`;
}

export function getMonthYear(date) {
	if (!(date instanceof Date)) return null;
	return format(date, "MM/yyyy");
}
