// loginValidations.tsx

export const isValidEmail = (email: string): boolean => {
    // Check if the email has the correct format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.endsWith("northeastern.edu");
  };
  
  export const isValidPassword = (password: string): boolean => {
    // Check if the password meets the specified criteria
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  