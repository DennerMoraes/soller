import React from 'react';
import './TextGrid.scss';

function TextGrid({ items }) {
  return (
    <>
      <div className="container-textGrid">
        {items.map((item, index) => (
          <article className="item-textGrid" key={index}>
            {item.icon && <div className="icon-textGrid">{item.icon}</div>}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </>
  );
}

export default TextGrid;
