const generatePassword = (length = 12, useSpecialChars = true) => {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  const special = '!@#$%^&*()_+[]{}|;:,.<>?';
  
  let allChars = letters + digits;
  if (useSpecialChars) allChars += special;

  // Ensure password contains at least one of each type
  let password = [
    letters[Math.floor(Math.random() * 26)],                    // one lowercase
    letters[Math.floor(Math.random() * 26) + 26],               // one uppercase
    digits[Math.floor(Math.random() * digits.length)]           // one digit
  ];

  if (useSpecialChars) {
    password.push(special[Math.floor(Math.random() * special.length)]); // one special char
  }

  // Fill remaining characters
  while (password.length < length) {
    password.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }

  // Shuffle password
  password = password.sort(() => Math.random() - 0.5);

  return password.join('');
}

module.exports = generatePassword
