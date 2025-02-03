import { useState } from "react";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function Button() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          padding: "0.4rem",
          backgroundColor: "maroon",
          color: "wheat",
          border: "1px solid wheat",
        }}
      >
        Click Me!
      </button>
      <h4>Clicked {count} times!</h4>
    </>
  );
}

export default function ShoppingList() {
  const listeItems = products.map((product) => {
    return (
      <li
        key={product.id}
        style={{
          color: product.isFruit ? "maroon" : "darkolivegreen",
        }}
      >
        {product.title}
      </li>
    );
  });

  return (
    <>
      <ul>{listeItems}</ul>
      {/* as this both button update separatlly */}
      <Button />
      <Button />
    </>
  );
}
