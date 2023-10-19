import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [items, SetItem] = useState(initialItems);

  function handleAddItem(item) {
    SetItem((items) => [...items, item]);
  }

  function handleDelete(id) {
    SetItem((items) => items.filter((item) => item.id !== id));
  }
  function handlePackedItem(id) {
    SetItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    console.log("item is packed.");
  }
  function handleClearList(item) {
    const confirmed = window.confirm(
      "Are yOu sure you want to delete all items?"
    );
    if (confirmed) SetItem((items) => []);
    console.log("list emptied");
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDltItem={handleDelete}
        pckeditem={handlePackedItem}
        dltall={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
