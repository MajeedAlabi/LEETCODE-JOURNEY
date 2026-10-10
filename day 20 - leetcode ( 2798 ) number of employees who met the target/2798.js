// PLAN
// step 1: pass the hours array and target into the function
// step 2: create a counter and set it to 0
// step 3: loop through the hours array
// step 4: check if the current value is greater than or equal to the target
// step 5: if the current value meets the target, increase the counter by 1
// step 6: continue until the loop reaches the end of the array
// step 7: return the counter because it represents the number of employees who met the target

const numberOfEmployeesWhoMetTarget = (hours, target) => {
  let counter = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) {
      counter++;
    }
  }

  return counter;
};
