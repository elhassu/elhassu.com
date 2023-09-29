/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				daintree: {
					"50": "#f0fdfc",
					"100": "#cbfcfa",
					"200": "#96f9f7",
					"300": "#5aecee",
					"400": "#28d1d9",
					"500": "#0fb2bd",
					"600": "#098d98",
					"700": "#0c6e79",
					"800": "#054b58",
					"900": "#032b32",
					"950": "#021f24",
				},
				orange: {
					"50": "#fff3ed",
					"100": "#ffe5d4",
					"200": "#ffc6a8",
					"300": "#ff9e70",
					"400": "#ff6a37",
					"500": "#ff4f1f",
					"600": "#f02806",
					"700": "#c71907",
					"800": "#9e160e",
					"900": "#7f160f",
					"950": "#450605",
				},
				celeste: {
					"50": "#f6f6f6",
					"100": "#eaebe9",
					"200": "#caccc7",
					"300": "#b9bcb5",
					"400": "#9da097",
					"500": "#898d82",
					"600": "#7e8076",
					"700": "#6a6b63",
					"800": "#595953",
					"900": "#494a44",
					"950": "#262624",
				},
			},
		},
    fontFamily: {
      'sans': ['Red Hat Display', 'Inter', 'sans-serif'],
      'title': ['League Spartan', 'sans-serif'],
    }
	},
	plugins: [],
};
