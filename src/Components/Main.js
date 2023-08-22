import CheckersButton from './CheckersButton';
import { Slider } from '@mui/material';
import { usePassword } from '../Contexts/PasswordContext';

const Main = () => {
  const {
    passwordLength,
    setPasswordLength,
    setCheckBoxStates,
    upper,
    lower,
    numbers,
    symbols,
    generatePassword,
  } = usePassword();

  const handlePasswordFields = (e) => {
    const { checked, name } = e.target;
    setCheckBoxStates((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="w-11/12 my-3 flex flex-wrap md:flex-nowrap">
        <p className="md:w-40 text-xl">Length: {passwordLength}</p>
        <Slider
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          min={5}
          max={20}
          aria-label="Default"
          valueLabelDisplay="off"
        />
      </div>
      <div className="flex flex-col gap-5 my-5 w-full">
        <div className="flex gap-5 flex-wrap md:flex-nowrap justify-center items-center">
          <CheckersButton
            checked={upper}
            setCheckBoxStates={setCheckBoxStates}
            name={'upper'}
            label={'Uppercase'}
            onChange={handlePasswordFields}
          />
          <CheckersButton
            checked={lower}
            setCheckboxStates={setCheckBoxStates}
            name={'lower'}
            label={'Lowercase'}
            onChange={handlePasswordFields}
          />
        </div>
        <div className="flex gap-5 flex-wrap md:flex-nowrap justify-center items-center">
          <CheckersButton
            checked={symbols}
            setCheckboxStates={setCheckBoxStates}
            name={'symbols'}
            label={'Symbols'}
            onChange={handlePasswordFields}
          />
          <CheckersButton
            checked={numbers}
            setCheckboxStates={setCheckBoxStates}
            name={'numbers'}
            label={'Numbers'}
            onChange={handlePasswordFields}
          />
        </div>
      </div>
      <button
        onClick={generatePassword}
        className="py-3 px-10 text-[20px] bg-[#012800] hover:bg-[#00000087] rounded-xl"
      >
        Generate Password
      </button>
    </div>
  );
};

export default Main;
