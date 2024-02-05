// our password authentication will see if the password has 8 characters with atleast one uppercase, one lowercase and one digit

function isPasswordValid(password) {
    // Regular expressions to check for at least one uppercase, one lowercase, and one digit
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
  
    // Check if the password meets the criteria
    return (
      password.length >= 8 &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      digitRegex.test(password)
    );
  }
  
  // Example usage:
  const password1 = prompt('enter the example password ')
  
  console.log(isPasswordValid(password1));
  
document.write(password1)
