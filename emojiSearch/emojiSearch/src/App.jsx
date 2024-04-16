import { useState, useEffect } from "react";
import emojiData from "./emojis.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setData(newData);
  }, [search]);

  return (
    <>
      <h1>emoji finder :)</h1>
      <input
        type="text"
        placeholder="type to find"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {data.map((emoji) => (
        <h2 key={emoji.title}>
          {emoji.title} {emoji.symbol}
        </h2>
      ))}
    </>
  );
}

export default App;
