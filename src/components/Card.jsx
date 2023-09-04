import { useState } from "react";
import classes from "./Card.module.css";

export default function Card({ products, deletedProduct }) {
  const [showInf, setShowInf] = useState([]);

  const handleToggleClick = (id) => {
    setShowInf((showInf) =>
      showInf.includes(id)
        ? showInf.filter((entry) => entry !== id)
        : [...showInf, id]
    );
  };

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <div
            href=""
            className={classes.productCard}
            onClick={() => handleToggleClick(products[index].id)}
          >
            {product.title}
            <button
              className={classes.buttonDelete}
              onClick={() => deletedProduct(products[index].id)}
            >
              Удалить
            </button>
          </div>
          {showInf.includes(products[index].id) && (
            <div className={classes.productInfCard}>
              <div>
                <div className={classes.cardHead}>Price: </div>
                {products[index].price}
              </div>
              <div>
                <div className={classes.cardHead}>Description: </div>
                {products[index].description}
              </div>
              <div>
                <div className={classes.cardHead}>Category: </div>
                {products[index].category}
              </div>
              <div>
                <div className={classes.cardHead}>Rating: </div>
                {products[index].rating.rate}, {products[index].rating.count}
              </div>
              <div>
                <img
                  className={classes.photo}
                  src={products[index].image}
                  alt=""
                />
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
