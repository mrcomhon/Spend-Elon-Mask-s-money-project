import { useState } from "react";
import "./App.css";

function App() {
  const [inputProtein, setInputProtein] = useState("");
  const [inputCarbohydrates, setInputCarbohydrates] = useState("");
  const [inputFat, setInputFat] = useState("");

  function allowOnlyNumber(e: React.KeyboardEvent<HTMLInputElement>) {
    const allowedKeys = [
      "Backspace",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Delete",
    ];
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  }

  function showResult(setter: React.Dispatch<React.SetStateAction<string>>) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const cleaned = raw.replace(/^0+(?!$)/, "") || "0";
      setter(cleaned);
    };
  }

  return (
    <>
      <input
        value={inputProtein}
        type="number"
        onKeyDown={allowOnlyNumber}
        onChange={showResult(setInputProtein)}
        placeholder="protein"
        inputMode="numeric"
        pattern="[0-9]*"
      />
      <br />
      <p>Белки: {Number(inputProtein) * 4}</p>
      <input
        value={inputCarbohydrates}
        type="number"
        onKeyDown={allowOnlyNumber}
        onChange={showResult(setInputCarbohydrates)}
        placeholder="carbohydrates"
        inputMode="numeric"
        pattern="[0-9]*"
      />
      <br />
      <p>Углеводы: {Number(inputCarbohydrates) * 4}</p>

      <input
        value={inputFat}
        type="number"
        onKeyDown={allowOnlyNumber}
        onChange={showResult(setInputFat)}
        placeholder="fat"
        inputMode="numeric"
        pattern="[0-9]*"
      />
      <p>Жиры: {Number(inputFat) * 9}</p>
      <br />
      <p>
        Общая калорийность:{" "}
        {Number(inputProtein) * 4 + Number(inputCarbohydrates) * 4 + Number(inputFat) * 9}
      </p>
      <button
        onClick={() => {
          setInputProtein("");
          setInputCarbohydrates("");
          setInputFat("");
        }}
      >
        Сбросить
      </button>
    </>
  );
}

export default App;
