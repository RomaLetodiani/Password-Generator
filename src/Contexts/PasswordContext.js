import { createContext, useCallback, useContext, useEffect, useState } from "react";

const PasswordContext = createContext();
export const usePassword = () => useContext(PasswordContext);

export const PasswordProvider = ({ children }) => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);

  const [isCopied, setIsCopied] = useState(false);

  const copyPassword = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const [checkBoxStates, setCheckBoxStates] = useState({
    upper: true,
    lower: true,
    numbers: true,
    symbols: true,
  });

  const { upper, lower, numbers, symbols } = checkBoxStates;

  const generatePassword = useCallback(() => {
    let charSet = "";

    if (upper) {
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lower) {
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (symbols) {
      charSet += "!@#$%^&*()";
    }
    if (numbers) {
      charSet += "0123456789";
    }

    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      password += charSet[Math.floor(Math.random() * charSet.length)];
    }
    setPassword(password);
  }, [passwordLength, upper, lower, numbers, symbols]);

  const onChangePassword = (e) => setPassword(e.target.value);

  useEffect(() => {
    if (!upper && !lower && !numbers && !symbols) {
      setCheckBoxStates({
        upper: false,
        lower: true,
        numbers: false,
        symbols: false,
      });
    }
  }, [upper, lower, numbers, symbols]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const contextValue = {
    passwordLength,
    setPasswordLength,
    setCheckBoxStates,
    upper,
    lower,
    numbers,
    symbols,
    password,
    generatePassword,
    isCopied,
    copyPassword,
    onChangePassword,
  };
  return <PasswordContext.Provider value={contextValue}>{children}</PasswordContext.Provider>;
};
