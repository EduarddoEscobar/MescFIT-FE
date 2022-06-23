import React from 'react';

const FaqItem = ({ faq }) => {
  return (
    <div className="faq-item">
      <h2>{faq.question}</h2>
      <p>{faq.answer}</p>
    </div>
  );
};

export default FaqItem;
