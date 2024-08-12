import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card mb-4 custom-margin">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h5 className="card-title">{`Pizza ${name}`}</h5>
        <hr />
        <p className="card-text"><strong>Ingredientes:</strong></p>
        <p className="card-text ingredients-text"><span role="img" aria-label="pizza">🍕</span> {ingredients.join(", ")}</p>
        <hr />
        <p className="card-price"><strong>Precio: ${price.toLocaleString()}</strong></p>
        <button className="btn btn-outline-secondary btn-sm mr-2">Ver Más <span role="img" aria-label="eyes">👀</span></button>
        <button className="btn btn-dark btn-sm">Añadir <span role="img" aria-label="cart">🛒</span></button>
      </div>
    </div>
  );
};

export default CardPizza;