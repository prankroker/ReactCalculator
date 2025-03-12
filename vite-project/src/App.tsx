import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Buttons from "./Buttons";
import { calculate } from "./calculate";

function App() {
  const buttons = [
    { id: "zero", sign: "0" },
    { id: "one", sign: "1" },
    { id: "equals", sign: "=" },
    { id: "two", sign: "2" },
    { id: "three", sign: "3" },
    { id: "add", sign: "+" },
    { id: "four", sign: "4" },
    { id: "five", sign: "5" },
    { id: "subtract", sign: "-" },
    { id: "six", sign: "6" },
    { id: "seven", sign: "7" },
    { id: "multiply", sign: "*" },
    { id: "eight", sign: "8" },
    { id: "nine", sign: "9" },
    { id: "divide", sign: "/" },
    { id: "clear", sign: "AC" },
  ];
  const regex = /[0-9]/;

  const [output, setOutput] = useState("");
  const [isDark, setIsDark] = useState(true);

  function clear() {
    setOutput("");
  }

  function themeToggle() {
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    setIsDark(!isDark);
  }

  function handleClick(sign: string) {
    if (sign === "0" && output === "0") {
      return;
    }
    switch (true) {
      case /=/.test(sign):
        setOutput(calculate(output));
        break;
      case /AC/.test(sign):
        clear();
        break;
      case /[+\-*\/]/.test(sign):
        if (output != "" && !/[+\-*\/]/.test(output.slice(-1))) {
          setOutput(output + sign);
        } else if (/[+\-*\/]/.test(output.slice(-1))) {
          setOutput(output.slice(0, -1) + sign);
        }
        break;
      case regex.test(sign):
        if (output != "0") {
          setOutput(output + sign);
        } else {
          setOutput(sign);
        }
        break;
    }
  }

  return (
    <>
      <div className="p-6 m-6">
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="size-24 shrink-0 animate-[spin_3s_linear_infinite] hover:drop-shadow-[0_0_2rem_#61dafbaa]"
          ></img>
        </a>
      </div>
      <div className="rounded">
        <div className="flex justify-center items-start">
          <button
            className="rounded border border-gray-600 hover:bg-neutral-200 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            onClick={themeToggle}
          >
            Toggle Theme
          </button>
        </div>
        <div className="mt-40 text-center dark:text-white">{output || "0"}</div>
        <Buttons buttons={buttons} onClick={handleClick} />
      </div>
    </>
  );
}

export default App;
