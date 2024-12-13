import React, { useState } from "react";
import "./QuantitySelector.css";

const QuantitySelector = ({
  initialQuantity = 1,
  min = 1,
  max = 10,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1;
        onQuantityChange(newQuantity);
        return newQuantity;
      });
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity + 1;
        onQuantityChange(newQuantity);
        return newQuantity;
      });
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= min && value <= max) {
      setQuantity(value);
      onQuantityChange(value);
    }
  };

  return (
    <div className="quantity-selector">
      <button onClick={handleDecrement} disabled={quantity <= min}>
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <button onClick={handleIncrement} disabled={quantity >= max}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
