import { FC, ChangeEvent, useState } from "react";

import "./App.css";

const App: FC = () => {
  const [password, setPassword] = useState<string>("");
  const [blurValue, setBlurValue] = useState<number>(20);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;
    const length: number = input.length;
    const newBlurValue: number = 20 - length * 2;
    setBlurValue(newBlurValue);
    setPassword(input);
  };

  return (
    <div>
      <div
        className="background"
        id="background"
        style={{ filter: `blur(${blurValue}px)` }}
      ></div>
      <div className="bg-white rounded p-10 text-center shadow-md">
        <h1 className="text-3xl">Image Password Strength</h1>
        <p className="text-sm text-gray-700">
          Change the password to see the effect
        </p>
        <div className="my-4 text-left">
          <label htmlFor="email" className="text-gray-900">
            Email:
          </label>
          <input
            type="text"
            className="border block w-full p-2 mt-2 rounded"
            id="email"
            placeholder="Enter Email"
          />
        </div>

        <div className="my-4 text-left">
          <label htmlFor="password" className="text-gray-900">
            Password:
          </label>
          <input
            type="password"
            className="border block w-full p-2 mt-2 rounded"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button
          className="bg-black text-white py-2 mt-4 inline-block w-full rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
