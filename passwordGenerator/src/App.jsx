import { useRef } from "react";
import { useCallback, useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#$!`%^&*()?/><,.|";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordClipboard = useCallback(() => {
    alert("Select Password");
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Generate password on first render and when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="w-full max-w-md mx-auto shadow-md rounded-md px-4 py-6 text-orange-500 bg-gray-700">
        <h1 className="text-4xl text-white text-center mb-4">
          Password Generator
        </h1>

        {/* Password Display & Copy Button */}
        <div className="flex shadow rounded-md overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-lg bg-gray-800 text-white"
            placeholder="Generated password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-amber-200 hover:bg-amber-400 text-black font-extrabold px-3 py-1 shrink-0 cursor-pointer"
            onClick={copyPasswordClipboard}
          >
            Copy
          </button>
        </div>

        {/* Options - Include Numbers & Symbols */}
        <div className="flex gap-4 justify-between text-white">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
              className="cursor-pointer"
            />
            <span className="ml-2">Include Numbers</span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(!charAllowed)}
              className="cursor-pointer"
            />
            <span className="ml-2">Include Symbols</span>
          </label>
        </div>

        {/* Password Length Slider */}
        <div className="mt-4 flex justify-between items-center text-white">
          <label>Password Length:</label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="cursor-pointer"
          />
          <span className="ml-2 font-bold">{length}</span>
        </div>

        {/* Generate Password Button */}
        <button
          onClick={passwordGenerator}
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition cursor-pointer"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
