export default function Item({ item, onDltItem, pckeditem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => pckeditem(item.id)}
      />
      <span style={item.packed ? { textDecorationLine: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDltItem(item.id)}>❌</button>
    </li>
  );
}
