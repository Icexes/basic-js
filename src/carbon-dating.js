const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity = false ) {
  let floatSampleActivity = parseFloat(sampleActivity)
  return typeof sampleActivity =='string' ? 
  (isNaN(floatSampleActivity) || floatSampleActivity<=0 || floatSampleActivity>15  ? false :   Math.ceil(Math.log(MODERN_ACTIVITY/floatSampleActivity)*HALF_LIFE_PERIOD/0.693))
   : false;
};
