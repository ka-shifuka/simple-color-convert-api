import convert from "color-convert";

class ColorConvert {
  constructor() {
    this.rgb;
    this.hsl;
    this.hex;
    this.keyword;
  }

  /*===== format =====*/
  formatRgb(stringRgb) {
    // rgb format is string like this "xxx-xxx-xxx", x is nuber
    // so we need to convert to like this [xxx,xxx,xxx]
    const rgbArrayFormat = stringRgb.split("-").map(e => Number(e));

    return rgbArrayFormat;
  }

  /*===== check =====*/
  checkRgbArrayFormat(rgbArrayFormat) {
    // rgb maximum value of rgb is like this [255,255,255] so if
    // more than maximum and/or is have more than 3 value in array
    // value we need return an object error
    if (rgbArrayFormat.length > 3) {
      console.log(rgbArrayFormat.length);
      return {
        error: "Length of rgb format is to big",
        status: 400
      };
    }
    for (let i of rgbArrayFormat) {
      if (i > 255) {
        return {
          error: "Value of rgb format is to big",
          status: 400
        };
      }
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
    return { hsl: this.hsl, rgb: rgbArrayFormat, status: 200 };
  }

  rgb_hex(stringRgb) {
    const rgbArrayFormat = this.formatRgb(stringRgb);

    if (this.checkRgbArrayFormat(rgbArrayFormat)) {
      return this.checkRgbArrayFormat(rgbArrayFormat);
    }

    this.hex = convert.rgb.hex(rgbArrayFormat);
    return { hex: this.hex, rgb: rgbArrayFormat, status: 200 };
  }
}

export { ColorConvert };
