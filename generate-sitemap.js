// Description: Generates a sitemap.xml file for the website.
const fs = require("fs");
const { routes } = require("./src/lib/Routes.js");

const BASE_URL = "https://www.elhassu.com";

function formatW3C(date) {
	if (!(date instanceof Date)) {
		try {
			date = new Date(date);
			if (isNaN(date.getTime())) {
				throw new Error();
			}
		} catch (e) {
			throw new Error("'date' is not a valid Date object or string.");
		}
	}
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	if (month < 10) month = "0" + month;

	let day = date.getDate();
	if (day < 10) day = "0" + day;

	let hours = date.getHours();
	if (hours < 10) hours = "0" + hours;

	let minutes = date.getMinutes();
	if (minutes < 10) minutes = "0" + minutes;

	let seconds = date.getSeconds();
	if (seconds < 10) seconds = "0" + seconds;

	let offset = -date.getTimezoneOffset();
	let offsetHours = Math.abs(Math.floor(offset / 60));
	let offsetMinutes = Math.abs(offset) - offsetHours * 60;
	if (offsetHours < 10) offsetHours = "0" + offsetHours;

	if (offsetMinutes < 10) offsetMinutes = "0" + offsetMinutes;

	let offsetSign = "+";
	if (offset < 0) offsetSign = "-";

	return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offsetSign}${offsetHours}:${offsetMinutes}`;
}
(async () => {
	console.time("Sitemap generated");
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
		.map(({ path, updatedAt }) => {
			return `<url>
        <loc>${BASE_URL}${path}</loc>
        <lastmod>${formatW3C(updatedAt ? new Date(updatedAt) : new Date())}</lastmod>
        <changefreq>monthly</changefreq>
    </url>`;
		})
		.join("\n   ")}
</urlset>
`;

	fs.writeFileSync("./public/sitemap.xml", sitemap);
	console.timeEnd("Sitemap generated");
})();
