export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Theres's no items in your list.Start Adding😎👀</em>
      </p>
    );

  const numItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percent = Math.round((packed / numItems) * 100);
  return (
    <footer className="stats">
      {percent === 100 ? (
        <em>Everything has been packed . You are ready for the trip</em>
      ) : (
        <em>
          You have {numItems} items on your list and you already picked {packed}{" "}
          i.e only {percent}
        </em>
      )}
    </footer>
  );
}
