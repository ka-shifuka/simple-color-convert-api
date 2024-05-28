import convert from "color-convert";
import validKeyword from "./keyword.js";

class ColorConvert {
	constructor() {
		this.rgb;
		this.hsl;
		this.hex;
	}

	/*===== format =====*/
	formatRgb(stringRgb) {
		// rgb format is string like this "xxx-xxx-xxx", x is nuber
		// so we need to convert to like this [xxx,xxx,xxx]
		const rgbArrayFormat = stringRgb.split("-").map(e => Number(e));

		return rgbArrayFormat;
	}

	formatHsl(stringHsl) {
		// hsl format is like 360-100-100 but we need convert like
		// this [360,100,100]
		const hslArrayFormat = stringHsl.split("-").map(e => Number(e));

		return hslArrayFormat;
	}

	/*===== check =====*/
	checkRgbArrayFormat(rgbArrayFormat) {
		// rgb maximum value of rgb is like this [255,255,255] so if
		// more than maximum and/or is have more than 3 value in array
		// value we need return an object error
		const worngFormat = {
			error: "RGB Format is Worng",
			status: 400
		};

		if (rgbArrayFormat.length > 3) return worngFormat;

		for (let i of rgbArrayFormat) {
			if (i > 255) return worngFormat;
		}

		// return false because if not true format return {}
		return false;
	}

	checkHexFormat(hex) {
		// hex format is like ffffff maximum legnth is 6 and maximum if
		// f, f is maximum value of hex (hex value is 0-9a-f) so we
		// neet to check the format is a true format or not
		const worngFormat = {
			error: "HEX Format is Worng",
			status: 400
		};

		if (hex.length > 6) return worngFormat;

		for (let i of hex) {
			const regex = /[1-9a-fA-F]/g;
			if (!regex.test(i)) return worngFormat;
		}

		return false;
	}

	checkHslFormat(hslArrayFormat) {
		// like rgb format but have different value in 1st index
		const worngFormat = {
			error: "HSL Format is Worng",
			status: 400
		};

		if (hslArrayFormat.length > 3) return worngFormat;

		for (let i = 0; i < hslArrayFormat.length; i++) {
			if (hslArrayFormat[0] > 360) return worngFormat;
			else continue;
			if (hslArrayFormat[i] > 100) return worngFormat;
		}

		return false;
	}

	/*===== convert =====*/
	rgb_hsl(stringRgb) {
		const rgbArrayFormat = this.formatRgb(stringRgb);

		if (this.checkRgbArrayFormat(rgbArrayFormat)) {
			return this.checkRgbArrayFormat(rgbArrayFormat);
		}

		this.hsl = convert.rgb.hsl(rgbArrayFormat);
		return {
			hsl: this.hsl,
			rgb: rgbArrayFormat,
			status: 200
		};
	}

	rgb_hex(rgb) {
		const rgbArrayFormat = this.formatRgb(stringRgb);

		if (this.checkRgbArrayFormat(rgbArrayFormat)) {
			return this.checkRgbArrayFormat(rgbArrayFormat);
		}

		this.hex = convert.rgb.hex(rgbArrayFormat);
		return { hex: this.hex, rgb: rgbArrayFormat, status: 200 };
	}

	hex_rgb(hex) {
		if (this.checkHexFormat(hex)) {
			return this.checkHexFormat(hex);
		}

		this.rgb = convert.hex.rgb(hex);
		return { rgb: this.rgb, hex: hex, status: 200 };
	}

	hex_hsl(hex) {
		if (this.checkHexFormat(hex)) {
			return this.checkHexFormat(hex);
		}

		this.hsl = convert.hex.hsl(hex);
		return { hsl: this.hsl, hex: hex, status: 200 };
	}

	hsl_rgb(hsl) {
		const hslArrayFormat = this.formatHsl(hsl);

		if (this.checkHslFormat(hslArrayFormat)) {
			return this.checkHslFormat(hslArrayFormat);
		}

		this.rgb = convert.hsl.rgb(hslArrayFormat);
		return { rgb: this.rgb, hsl: hslArrayFormat, status: 200 };
	}

	hsl_hex(hsl) {
		const hslArrayFormat = this.formatHsl(hsl);

		if (this.checkHslFormat(hslArrayFormat)) {
			return this.checkHslFormat(hslArrayFormat);
		}

		this.hex = convert.hsl.hex(hslArrayFormat);
		return { hex: this.hex, hsl: hslArrayFormat, status: 200 };
	}

	keyword(key) {
		console.log(convert.keyword.rgb(key));
		if (!convert.keyword.rgb(key)) {
			return {
				error: "Keyword is Worng",
				"valid-keyword": validKeyword,
				status: 400
			};
		}

		this.rgb = convert.keyword.rgb(key);
		this.hsl = convert.keyword.hsl(key);
		this.hex = convert.keyword.hex(key);

		return {
			rgb: this.rgb,
			hsl: this.hsl,
			hex: this.hex,
			keyword: key,
			status: 200
		};
	}
}

export { ColorConvert };
