import React from "react";

function Price({ originalPrice, salePrice }) {
  return (
    <div className="book__selected--price">
      {salePrice ? (
        <>
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
          ${salePrice.toFixed(2)}
        </>
      ) : (
        <>${originalPrice.toFixed(2)}</>
      )}
    </div>
  );
}

export default Price;
