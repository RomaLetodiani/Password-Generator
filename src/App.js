import { PasswordGeneratorDiv } from "./Components/PasswordGeneratorDiv";
import { PasswordProvider } from "./Contexts/PasswordContext";

export const App = () => (
  <PasswordProvider>
    <div className="w-full min-w-[280px] min-h-screen bg-gradient-to-tl from-[#00FFC2] to-[#3FA161] flex justify-center items-center">
      <PasswordGeneratorDiv />
    </div>
  </PasswordProvider>
);
