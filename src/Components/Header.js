import { VscRefresh, VscCopy } from 'react-icons/vsc';
import imagePassword from '../Images/passwordGif.gif';
import { usePassword } from '../Contexts/PasswordContext';
import CopyToClipboard from 'react-copy-to-clipboard';

const Header = () => {
  const {
    password,
    copyPassword,
    isCopied,
    onChangePassword,
    generatePassword,
  } = usePassword();

  return (
    <div className="text-center border-b border-[#fff] border-dashed flex flex-col items-center">
      <div className="w-[100px]">
        <img className="w-full" alt="Safe Passwords" src={imagePassword} />
      </div>
      <h1 className="text-[35px]">Password Generator</h1>
      <p>Create secure passwords to protect your accounts</p>
      <div className="flex justify-center gap-5 m-5 flex-wrap w-full">
        <div className="relative w-2/3 min-w-[170px]">
          <input
            disabled
            value={password}
            onChange={onChangePassword}
            placeholder="Your Password"
            className="pl-4 pr-10 py-2 rounded-md w-full text-[#000] font-bold outline-none border-none bg-[#fff]"
          />
          <button
            onClick={generatePassword}
            className="absolute right-0 top-0 w-10 h-10 text-[#000] text-[25px] p-2 rounded-md hover:bg-[#a7e1b3]"
          >
            <VscRefresh />
          </button>
        </div>
        <CopyToClipboard text={password} onCopy={copyPassword}>
          <button className="flex gap-1 font-bold p-2 px-4 rounded-md bg-[#fff] text-[#000] hover:bg-[#a7e1b3] w-28">
            <VscCopy className="text-[25px]" />
            {isCopied ? 'Copied' : 'Copy'}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Header;
