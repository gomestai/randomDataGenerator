const generatePassword = () => {
  /**
   * Generate a random password
   * @return {string}
   */
  let password = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  const charactersLength = characters.length;
  for (let i = 0; i < 16; i++) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return password;
};

module.exports = generatePassword;
