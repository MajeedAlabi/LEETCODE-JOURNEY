// PLAN
// step 1: pass the coordinate1 and coordinate2 strings into the function
// step 2: create an array containing the horizontal coordinates from a to h
// step 3: create an array containing the vertical coordinates from 1 to 8
// step 4: create a helper function that accepts a coordinate string
// step 5: split the coordinate into its horizontal and vertical characters
// step 6: find the index of the horizontal character in the horizontal array
// step 7: find the index of the vertical character in the vertical array
// step 8: return both indexes in an array
// step 9: call the helper function for both coordinates and store their indexes
// step 10: create another helper function that accepts the horizontal and vertical indexes
// step 11: use a switch statement to check whether each index is even or odd
// step 12: return the square color based on the combination of even and odd indexes
// NOTE: when using return inside a switch case, break is unnecessary because return exits the entire function, not just the switch
// step 13: call the color helper function for both coordinates
// step 14: compare the two colors and return true if they match or false otherwise
// HINT: rules to note
// even horizontal index + even vertical index = black
// even horizontal index + odd vertical index = white
// odd horizontal index + even vertical index = white
// odd horizontal index + odd vertical index = black

const checkTwoChessboards = (coordinate1, coordinate2) => {
  // horizontal parent:
  const horizontal = ["a", "b", "c", "d", "e", "f", "g", "h"];

  // vertical parent:
  const vertical = ["1", "2", "3", "4", "5", "6", "7", "8"];

  function helper1(cord) {
    const test = cord.split("");
    const indexCord1 = horizontal.findIndex((num) => num === test[0]);
    const indexCord2 = vertical.findIndex((num) => num === test[1]);

    return [indexCord1, indexCord2];
  }

  const cord1Index = helper1(coordinate1);
  const cord2Index = helper1(coordinate2);

  function helper2(yes1, yes2) {
    switch (true) {
      case yes1 % 2 === 0 && yes2 % 2 === 0: // even even
        return "black";
      case yes1 % 2 === 0 && yes2 % 2 === 1: // even odd
        return "white";
      case yes1 % 2 === 1 && yes2 % 2 === 1: // odd odd
        return "black";
      case yes1 % 2 === 1 && yes2 % 2 === 0: // odd even
        return "white";
      default:
        break;
    }
  }

  const finalValue = helper2(...cord1Index);
  const finalValue2 = helper2(...cord2Index);

  if (finalValue === finalValue2) {
    return true;
  } else {
    return false;
  }
};
