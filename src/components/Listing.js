import React from "react";
import PropTypes from "prop-types";

export default function Listing({ items }) {
  return (
    <div className='item-list'>
      {items.map((item) => {
        if (!item.title) {
          return null;
        }
        const quantity =
          item.quantity <= 10 ? "low" : item.quantity <= 20 ? "medium" : "high";
        return (
          <div className='item' key={item.listing_id}>
            <div className='item-image'>
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} alt='изображение' />
              </a>
            </div>
            <div className='item-details'>
              <p className='item-title'>
                {item.title.length > 50
                  ? item.title.slice(0, 49) + "..."
                  : item.title}
              </p>
              <p className='item-price'>
                {item.currency_code
                  ? item.currency_code + item.price
                  : item.price + "GBP"}
              </p>
              <p className={`${"level-" + quantity} item-quantity`}>
                {item.quantity}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Listing.defaultProps = { items: [] };

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
