// PLAN
// step 1: pass the s string into the function
// step 2: create a depth variable initialized to 0 to track the current nesting depth
// step 3: create a highestDepth variable initialized to 0 to track the maximum nesting depth reached
// step 4: loop through each character in the string
// step 5: check the current character using a switch statement
// step 6: if the character is an opening parenthesis, increase depth by 1
// step 7: compare depth with highestDepth and update highestDepth if depth is greater
// step 8: if the character is a closing parenthesis, decrease depth by 1
// step 9: continue until every character has been checked
// step 10: return highestDepth

const maxDepth = (s) => {
  let depth = 0;
  let highestDepth = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        depth++;
        highestDepth = Math.max(highestDepth, depth);
        break;
      case ")":
        depth--;
        break;
      default:
        break;
    }
  }

  return highestDepth;
};
