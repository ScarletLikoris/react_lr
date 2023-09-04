import React from "react";
import { useState } from "react";

const AddProducts = ({ addProduct }) => {
  const [tit, setTitle] = useState("");
  const [pric, setPrice] = useState("");
  const [desc, setDescription] = useState("");
  const [cat, setCategory] = useState("");
  const [ratee, setRate] = useState("");
  const [cnt, setCount] = useState("");

  const addnewProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      id: new Date(),
      title: tit,
      price: pric,
      description: desc,
      category: cat,
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: ratee,
        count: cnt,
      },
    };
    addProduct(newProduct);
  };

  return (
    <div>
      <form className="addCard" onSubmit={addnewProduct}>
        Title:{" "}
        <input
          type="text"
          value={tit}
          onChange={(event) => setTitle(event.target.value)}
        />
        Price:{" "}
        <input
          type="text"
          value={pric}
          onChange={(event) => setPrice(event.target.value)}
        />
        Description:{" "}
        <input
          type="text"
          value={desc}
          onChange={(event) => setDescription(event.target.value)}
        />
        Category:{" "}
        <input
          type="text"
          value={cat}
          onChange={(event) => setCategory(event.target.value)}
        />
        Rating rate:{" "}
        <input
          type="text"
          value={ratee}
          onChange={(event) => setRate(event.target.value)}
        />
        Rating count:{" "}
        <input
          type="text"
          value={cnt}
          onChange={(event) => setCount(event.target.value)}
        />
        <button className="buttonAdd">Добавить</button>
      </form>
    </div>
  );
};

export default AddProducts;
