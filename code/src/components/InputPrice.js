import React from "react";

const priceChoices = [
  "1-3000kr/month",
  "3000-5000kr/month",
  "5000-8000kr/month",
  "8000-10 000kr/month",
  "10 000-13 000 kr/month",
];

export const InputPrice = (props) => {
  return (
    <div className="each-question">
      Rent price:
      {priceChoices.map((choice) => (
        <label key={choice}>
          <input
            type="radio"
            value={choice}
            onChange={props.onPriceChange}
            checked={props.price === choice}
          />
          {choice}
        </label>
      ))}
      <button type="submit" className="button">
        Submit
      </button>
    </div>
  );
};
