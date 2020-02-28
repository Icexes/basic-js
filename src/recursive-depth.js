module.exports = class DepthCalculator {
    calculateDepth(arr) {

        return arr.reduce((accum, curr) => {
            let counter = 1;
            if (Array.isArray(curr)) {
                counter += this.calculateDepth(curr)
            }
            if (counter > accum) {
                accum = counter
            }
            return accum;
        }, 1)
    }
}
  