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
  //  console.log(calculateDepth([1,2,3]))
//alert(calculateDepth([1,[[1,2,3,4],2],2]))
//alert(calculateDepth([[]]))
//alert(calculateDepth([1, 2, 3, 4, 5]))
//alert(calculateDepth([[[]]]))
//alert(calculateDepth([1, 2, 3, [1], 4, 5, [1]]))



// alert(calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]));
// alert(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4);
//  alert(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 5);
//  alert(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 15);
// alert(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 25);
//  alert(calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 31);