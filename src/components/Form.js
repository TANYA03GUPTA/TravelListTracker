import { useState } from "react";
export function Form({ onAddItem, onDltItem }) {
  const [description, setDescp] = useState("");
  const [quantity, setQntty] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItem(newItem);

    setDescp("");
    setQntty(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want for your😎 trip ?😍</h3>
      <select
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value);
          setQntty(Number(e.target.value));
        }}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item....."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          setDescp(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
