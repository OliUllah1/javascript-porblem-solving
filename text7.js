//Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumber) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10
    };
  
    let totalIntegerValue = 0;
    let prevValue = 0;
  
    for (let i = romanNumber.length - 1; i >= 0; i--) {
      const char = romanNumber[i];
      const value = romanNumerals[char];
  

      if (value < prevValue) {
        totalIntegerValue -= value;
      } else {
        totalIntegerValue += value;
      }

      prevValue = value;
    }
  
    return totalIntegerValue;
  }

  const input = "XXI"
  const result = romanToInteger(input)
  console.log(result)