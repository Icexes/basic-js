module.exports =
    function transform(arr) {
        if (!Array.isArray(arr)) throw Error;
        let finalArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '--double-next') {
                if (i + 1 == arr.length) break;
                finalArr.push(arr[i + 1]);
                continue;
            }
            else if (arr[i] == '--discard-next') {
                if (i + 1 == arr.length) break;
                i++;
                continue;
            }
            else if (arr[i] == '--double-prev') {
                if (i - 1 < 0) continue;
                finalArr.push(arr[i - 1]);
                continue;
            }
            else if (arr[i] == '--discard-prev') {
                if (i - 1 < 0) continue;
                finalArr.pop();
                continue;
            }
            else finalArr.push(arr[i]);
        }

        return finalArr;
    };


