module.exports = function repeater( str, options ) {
     
    if (options.addition === undefined) options.addition = "" ;
    if (!options.repeatTimes) options.repeatTimes = 1 ;
    if (!options.additionRepeatTimes) options.additionRepeatTimes = 1 ;
    if (!options.separator) options.separator = '+' ;
    if(!options.additionSeparator) options.additionSeparator = '|' ; 
   
    let strWithAddition = str;
    for (let j =0; j<options.additionRepeatTimes;j++) {
        j!== options.additionRepeatTimes-1 ? strWithAddition+= options.addition + options.additionSeparator : strWithAddition+= options.addition
    }

    let finalStr="";
    for (let j =0; j<options.repeatTimes;j++) {
        j!== options.repeatTimes-1 ? finalStr= finalStr + strWithAddition + options.separator  : finalStr+=strWithAddition
    }
    return finalStr

};
  