import "./Controls.css";
import { useState } from "react";

function Controls() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="controls">
      <input
        type="text"
        className="input"
        value={text}
        onChange={handleChange}
      />
      <button className="button">추가</button>
      <select className="select">
        <option value="">전체</option>
        <option value="">할일</option>
        <option value="">완료</option>
      </select>
    </div>
  );
}

export default Controls;
