import AllowOnlyNumbers from './OnlyNumbers';
import WithoutZeroBeginning from './WithoutZeroBegging';
import { useState } from 'react';

function Input() {
      const [input, setInput] = useState("");

    return (
      <input
        type="number"
        className="card__purchase-input"
        value={input}
        onKeyDown={AllowOnlyNumbers}
        onChange={WithoutZeroBeginning(setInput)}
      />
    );
}

export default Input