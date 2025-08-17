import React, { useState } from "react";
import './pricecal.css';

function PriceCalculator() {
  const [weight, setWeight] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [discountType, setDiscountType] = useState("standard");
  const [finalPrice, setFinalPrice] = useState(null);

  const handleCalculate = () => {
    let discount = 0;

    if (discountType === "standard") {
      discount = 0.06; 
    } else if (discountType === "seasonal") {
      discount = 0.12; 
    } else if (discountType === "weight") {
      if (Number(weight) <= 10) {
        discount = 0.06;
      } else {
        discount = 0.18;
      }
    }

    const discountedPrice = Number(totalPrice) - Number(totalPrice) * discount;
    setFinalPrice(discountedPrice.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h2>Price Calculator</h2>

      <div>
        <label>Weight: </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
      </div>

      <div>
        <label>Total Price: </label>
        <input
          type="number"
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
          placeholder="Enter total price"
        />
      </div>

      <div>
        <label>Discount Type: </label>
        <select
          value={discountType}
          onChange={(e) => setDiscountType(e.target.value)}>
          <option value="standard">Standard Discount</option>
          <option value="seasonal">Seasonal Discount</option>
          <option value="weight">Weight Discount</option>
        </select>
      </div>

      <button
        onClick={handleCalculate}
        style={{ marginTop: "10px", padding: "5px 15px" }}> Calculate</button>

      {finalPrice !== null && (
        <>
        <h3 style={{ marginTop: "15px" }}>
          Final Price: ₹{finalPrice}
        </h3>
        <img src="/thumsup.jpg" alt="vaalthukkal" style={{maxWidth:"400px"}}/>
        </>
      )}
    </div>
  );
}

export default PriceCalculator;
