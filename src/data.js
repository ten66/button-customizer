class InputRangeSize {
  constructor (min, max, step){
    this.min = min;
    this.max = max;
    this.step = step;
  }
};

export const opacityRange = new InputRangeSize("0", "1", "0.1");
export const borderRadiusRange = new InputRangeSize("0", "100", "1");
export const fontSizeRange = new InputRangeSize("10", "40", "1");