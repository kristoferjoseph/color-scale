var Color = require('color');

module.exports = function(opts) {
  opts = opts || {};
  var color = opts.color || "grey";
  var variance = opts.variance || 10;
  var colorArray = Color(color).hwbArray();

  return function(step) {
    step = step || 0;
    //multiply step by variance.
    var adjustment = variance * Math.abs(step);
    var resultArray = colorArray.slice();

    if (step > 0) {
      //If positive incement white and decrement black
      resultArray[1] = increment(resultArray[1], adjustment);
      resultArray[2] = decrement(resultArray[2], adjustment);
    } else {
      //If negative increment black and decrement white
      resultArray[2] = increment(resultArray[2], adjustment);
      resultArray[1] = decrement(resultArray[1], adjustment);
    }

    return Color().hwb(resultArray).hexString();
  };
};

function increment(value, amount) {
  // if value + amount > 100 return 100 else return sum
  var output = value + amount;
  return (output > 100) ? 100 : output;
}

function decrement(value, amount) {
  // if value + amount < 0 return 0 else return result
  var output = value - amount;
  return (output < 0) ? 0 : output;
}

module.exports.increment = increment;
module.exports.decrement = decrement;

