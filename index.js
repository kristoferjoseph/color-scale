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

    if (step > 0) {
      //If positive incement white and decrement black
      colorArray[1] = increment(colorArray[1], adjustment);
      colorArray[2] = decrement(colorArray[2], adjustment);
    } else {
      //If negative increment black and decrement white
      colorArray[2] = increment(colorArray[2], adjustment);
      colorArray[1] = decrement(colorArray[1], adjustment);
    }

    console.log('colorArray', colorArray);
    return Color().hwb(colorArray).hexString();
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

