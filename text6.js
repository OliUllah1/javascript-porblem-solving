//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%&*';
  
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const charType = Math.floor(Math.random() * 4); 
      let randomChar;
  
      if (charType == 1) {
          randomChar = uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));}
     else if(charType == 2){
          randomChar = lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length))
      }
      else if(charType == 3){
          randomChar = numbers.charAt(Math.floor(Math.random() * numbers.length)); }
     else if(charType == 4){
          randomChar = specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
        
      }
  
      password += randomChar;
    }
  
    return password;
  }
  
  // Example usage: Generate a random password of length 12
  const passwordLength = 8;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
